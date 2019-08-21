package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.Converter;
import com.omniwyse.booksapi.commons.LuceneConfig;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.dto.BookDetailsDTO;
import com.omniwyse.booksapi.entity.BookEntity;
import com.omniwyse.booksapi.entity.BooksInventoryEntity;
import com.omniwyse.booksapi.exceptions.RecordNotFoundException;
import com.omniwyse.booksapi.repo.BooksInventoryRepo;
import com.omniwyse.booksapi.repo.BooksRepo;
import com.omniwyse.booksapi.services.BooksService;
import com.omniwyse.booksapi.utils.ValidationUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.LongStream;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.BOOK_NOT_FOUND;
import static com.omniwyse.booksapi.constants.AppConstants.DEFAULT_BOOK_AVAILABILITY;
import static com.omniwyse.booksapi.constants.AppConstants.VALIDATION_FAILED;

@Service
public class BooksSerivceImpl implements BooksService {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksSerivceImpl.class);

    private BooksRepo booksRepository;
    private BooksInventoryRepo booksInventoryRepo;
    private ValidationMessages validationMessages;
    private Converter converter;
    private LuceneConfig luceneConfig;
    private TransactionalConfig transactionConfig;

    @Autowired
    public BooksSerivceImpl(BooksRepo booksRepository, BooksInventoryRepo booksInventoryRepo, ValidationMessages validationMessages,
                            Converter converter, LuceneConfig luceneConfig, TransactionalConfig transactionConfig) {
        this.booksRepository = booksRepository;
        this.booksInventoryRepo = booksInventoryRepo;
        this.validationMessages = validationMessages;
        this.converter = converter;
        this.luceneConfig = luceneConfig;
        this.transactionConfig = transactionConfig;
    }

    @Override
    public Map<Object, Object> getBooks() {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.getBooks()");
        Map<Object, Object> response = new HashMap<>();
        List<BookDTO> books = booksRepository.findAll();
        response.put("books", books);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.getBooks()");
        return response;
    }

    @Override
    public Map<Object, Object> saveBook(final BookDTO bookDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.saveBook()");
        final Map<Object, Object> response = validateBookFields(bookDetails);
        if (response.containsKey(VALIDATION_FAILED)) {
            return response;
        }
        BookEntity book = setBookData(bookDetails);
        try {
            //Start Transaction
            transactionConfig.startTransaction();

            booksRepository.save(book);
            LongStream.range(0, book.getStock()).forEach(num -> booksInventoryRepo.save(setInventoryBookData(book)));

            transactionConfig.commit();
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("book", book);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.saveBook()");
        return response;
    }

    @Override
    public Map<Object, Object> updateBook(long bookId, BookDTO bookDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.updateBook()");
        Map<Object, Object> response = validateBookFields(bookDetails);
        if (response.containsKey("validationFailed")) {
            return response;
        }
        response = getBook(bookId);
        try {

            //Transaction start
            transactionConfig.startTransaction();

            final BookEntity existingCopy = (BookEntity) response.get("book");
            BookEntity book = setBookData(bookDetails);
            book.setCreatedOn(existingCopy.getCreatedOn());
            book = booksRepository.update(book);

            //Commit transaction
            transactionConfig.commit();
            response.put("book", book);
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.updateBook()");
        return response;
    }

    @Override
    public Map<Object, Object> getBook(long bookId) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.getBook()");
        final Map<Object, Object> response = new HashMap<>();
        final BookEntity book = booksRepository.findByBookId(bookId);
        if (book == null) {
            throw new RecordNotFoundException(validationMessages.getExceptionMessage(BOOK_NOT_FOUND));
        }
        response.put("book", book);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.getBook()");
        return response;
    }

    @Override
    public Map<Object, Object> getBookDetailsById(long bookId) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.getBookDetailsById()");
        final Map<Object, Object> response = new HashMap<>();
        final BookDetailsDTO book = booksRepository.findDetailsByBookId(bookId);
        if (book == null) {
            throw new RecordNotFoundException(validationMessages.getExceptionMessage(BOOK_NOT_FOUND));
        }
        response.put("book", book);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.getBookDetailsById()");
        return response;
    }

    private BookEntity setBookData(final BookDTO bookDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.setBookData()");
        final BookEntity book = new BookEntity();
        book.setBookId(bookDetails.getBookId());
        book.setAuthor(bookDetails.getAuthor());
        book.setCreatedBy(bookDetails.getCreatedBy());
        book.setGenreId(bookDetails.getGenreId());
        book.setOwnerId(bookDetails.getOwnerId());
        book.setPublisher(bookDetails.getPublisher());
        book.setTitle(bookDetails.getTitle());
        book.setIsbnCode(bookDetails.getIsbnCode());
        book.setEdition(bookDetails.getEdition());
        book.setYear(bookDetails.getYear());
        book.setBookCoverPage(bookDetails.getBookCoverPage());
        book.setSamplePageUrl(bookDetails.getSamplePageUrl());
        book.setImagesUrl1(bookDetails.getImagesUrl1());
        book.setImagesUrl2(bookDetails.getImagesUrl2());
        book.setBookCondition(bookDetails.getBookCondition());
        book.setBookPrice(bookDetails.getBookPrice());
        book.setBookDescription(bookDetails.getBookDescription());
        book.setDemand(bookDetails.getDemand());
        book.setNumberOfPages(bookDetails.getNumberOfPages());
        book.setProductGroup(bookDetails.getProductGroup());
        book.setPublicationDate(bookDetails.getPublicationDate());
        book.setRentPerDay(bookDetails.getRentPerDay());
        book.setRentPerWeek(bookDetails.getRentPerWeek());
        book.setRentPerMonth(bookDetails.getRentPerMonth());
        book.setStock(bookDetails.getStock());
        book.setCreatedBy(bookDetails.getCreatedBy());
        book.setCreatedOn(new Timestamp(new Date().getTime()));
        book.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.setBookData()");
        return book;
    }

    @Override
    public Map<Object, Object> uploadBooksFile(@Valid @NotNull MultipartFile file) throws IOException {
        final Map<Object, Object> response = new HashMap<>();
        LOGGER.debug("Start : com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.uploadBooksFile()");
        ArrayList<BookEntity> booklist = null;
        try (InputStream finXLSX = file.getInputStream(); XSSFWorkbook workSheet = new XSSFWorkbook(finXLSX)) {
            final XSSFSheet sheet = workSheet.getSheetAt(0);
            booklist = new ArrayList<>();
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                final Row row = sheet.getRow(i);
                String title = null;
                if ((row.getCell(0) != null) && (row.getCell(22) != null)) {
                    title = row.getCell(0).toString();
                }
                if (title != null) {
                    final BookEntity existingBook = booksRepository.findByTitle(title);
                    long stock;
                    BookEntity book;
                    if (existingBook == null) {
                        book = setBookData(row, new BookEntity());
                        book.setCreatedOn(new Timestamp(new Date().getTime()));
                        booksRepository.save(book);
                    } else {
                        book = setBookData(row, existingBook);
                        booksRepository.update(book);
                    }
                    stock = book.getStock();
                    booklist.add(book);
                    final BooksInventoryEntity inventoryBook = setInventoryBookData(book);
                    LongStream.range(0, stock).forEach(num -> booksInventoryRepo.save(inventoryBook));
                }
            }

            LOGGER.debug("Successfully Insert or update the list of books from excel into database");
            response.put("message", "Successfully added the books to inventory");
        } catch (IOException e) {
            LOGGER.error("Exception occured..", e);
            throw new IOException(e.getMessage());
        } catch (Exception e) {
            LOGGER.error("Exception occured..", e);
        }
        response.put("bookList", booklist);
        LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.uploadBooksFile()");
        return response;
    }

    @SuppressWarnings("deprecation")
    private BookEntity setBookData(final Row row, final BookEntity book) {
        LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.setBookData()");
        if (row.getCell(0) != null && row.getCell(0).toString() != null && !row.getCell(0).toString().equals("")) {

            book.setTitle(getCellStringValue(row.getCell(0)));
            book.setAuthor(getCellStringValue(row.getCell(1)));
            if (row.getCell(2) != null) {
                row.getCell(2).setCellType(CellType.STRING);
            }
            book.setIsbnCode(getCellStringValue(row.getCell(2)));
            // book.setGeneres(row.getCell(3).toString());need to change it to id
            book.setGenreId(1);// remove hard code
            book.setEdition(getCellStringValue(row.getCell(4)));
            book.setYear(getCellDateValue(row.getCell(5)));
            book.setBookCoverPage(getCellStringValue(row.getCell(6)));
            book.setSamplePageUrl(getCellStringValue(row.getCell(7)));
            book.setImagesUrl1(getCellStringValue(row.getCell(8)));
            book.setImagesUrl2(getCellStringValue(row.getCell(9)));
            book.setBookCondition(getCellStringValue(row.getCell(10)));
            book.setBookPrice(converter.getBigDecimalVal(getCellDecimalValue(row.getCell(11))));
            book.setBaseRentalValue(converter.getBigDecimalVal(getCellDecimalValue(row.getCell(12))));
            book.setBookDescription(getCellStringValue(row.getCell(13)));
            book.setDemand(getCellNumericValue(row.getCell(14)));
            book.setNumberOfPages(getCellNumericValue(row.getCell(15)));
            book.setProductGroup(getCellNumericValue(row.getCell(16)));
            book.setPublicationDate(getCellDateValue(row.getCell(17)));
            book.setPublisher(getCellStringValue(row.getCell(18)));
            book.setRentPerDay(converter.getBigDecimalVal(getCellDecimalValue(row.getCell(19))));
            book.setRentPerWeek(converter.getBigDecimalVal(getCellDecimalValue(row.getCell(20))));
            book.setRentPerMonth(converter.getBigDecimalVal(getCellDecimalValue(row.getCell(21))));
            book.setStock((int) getCellNumericValue(row.getCell(22)));
            book.setOwnerId(1);
            book.setCreatedBy("satish");// change it
            book.setModifiedOn(new Timestamp(new Date().getTime()));
        }
        LOGGER.debug("End : com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.setBookData()");
        return book;
    }

    private String getCellStringValue(final Cell cell) {
        if (cell != null) {
            return cell.toString();
        }
        return null;
    }

    private boolean isCellValEmpty(Cell cell) {
        String val = getCellStringValue(cell);
        return val == null || val.equals("") || val.equals("NA");
    }

    private double getCellDecimalValue(final Cell cell) {
        if (cell != null) {
            if (isCellValEmpty(cell)) {
                return 0.0;
            }
            return cell.getNumericCellValue();
        }
        return 0.0;
    }

    private long getCellNumericValue(final Cell cell) {
        if (cell != null) {
            if (isCellValEmpty(cell)) {
                return 0;
            }
            return (long) cell.getNumericCellValue();
        }
        return 0;
    }

    private Date getCellDateValue(final Cell cell) {
        if (cell != null) {
            if (isCellValEmpty(cell)) {
                return null;
            }
            return cell.getDateCellValue();
        }
        return null;
    }

    private BooksInventoryEntity setInventoryBookData(final BookEntity bookInventoryDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.setInventoryBookData()");
        final BooksInventoryEntity inventoryBook = new BooksInventoryEntity();
        inventoryBook.setBookId(bookInventoryDetails.getBookId());
        inventoryBook.setOwnerId(bookInventoryDetails.getOwnerId());
        inventoryBook.setAvailabilityId(DEFAULT_BOOK_AVAILABILITY);
        inventoryBook.setAvailableDate(new Date());
        inventoryBook.setBuyFlag(true);
        inventoryBook.setRentFlag(true);
        inventoryBook.setCreatedBy(bookInventoryDetails.getCreatedBy());
        inventoryBook.setCreatedOn(new Timestamp(new Date().getTime()));
        inventoryBook.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.setInventoryBookData()");
        return inventoryBook;
    }


    @Override
    public Map<Object, Object> searchBooks(String searchInput) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.searchBooks()");
        final Map<Object, Object> response = new HashMap<>();
        // searchInput can be title , author and publisher
        if (searchInput != null && !searchInput.equals("")) {
            searchInput = searchInput.toLowerCase();

            final String bookIds = luceneConfig.addBooksToLuceneLibrary(booksRepository.findAll(), searchInput);
            if (!bookIds.equals("")) {
                final List<BookDTO> books = booksRepository.findAllByBookIds(bookIds);
                if (books.isEmpty()) {
                    throw new RecordNotFoundException("No results found");
                }
                response.put("books", books);
            } else {
                throw new RecordNotFoundException("No results found");
            }
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksSerivceImpl.searchBooks()");
        return response;
    }

    private Map<Object, Object> validateBookFields(final BookDTO book) {
        Map<Object, Object> response = new HashMap<>();
        if (ValidationUtils.checkEmptyOrNull(book.getTitle())) {
            response.put("title", "Title can not be empty");
        }
        if (ValidationUtils.checkEmptyOrNull(book.getAuthor())) {
            response.put("author", "Author can not be empty");
        }
        if (ValidationUtils.checkEmptyOrNull(book.getPublisher())) {
            response.put("publisher", "Publisher can not be empty");
        }
        if (ValidationUtils.checkEmptyOrNull(book.getCreatedBy())) {
            response.put("createdBy", "Created by can not be empty");
        }
        if (ValidationUtils.checkZeroOrLessThan(book.getGenreId())) {
            response.put("genre", "Genre can not be empty");
        }
        if (ValidationUtils.checkZeroOrLessThan(book.getOwnerId())) {
            response.put("owner", "Owner can not be empty");
        }
        if (!response.isEmpty()) {
            response.put("validationFailed", "");
        }
        return response;
    }


}
