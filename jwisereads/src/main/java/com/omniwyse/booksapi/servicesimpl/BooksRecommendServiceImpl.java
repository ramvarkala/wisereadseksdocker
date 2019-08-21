package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.commons.ValidationMessages;
import com.omniwyse.booksapi.db.TransactionalConfig;
import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.dto.BookRecommendationDTO;
import com.omniwyse.booksapi.entity.BookRecommendationEntity;
import com.omniwyse.booksapi.exceptions.RecordNotFoundException;
import com.omniwyse.booksapi.repo.BooksRecommendRepo;
import com.omniwyse.booksapi.repo.BooksRepo;
import com.omniwyse.booksapi.services.BooksRecommendService;
import com.omniwyse.booksapi.services.CommonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

import static com.omniwyse.booksapi.commons.ExceptionMessagesKeys.BOOK_REC_NOT_FOUND;

@Service
public class BooksRecommendServiceImpl implements BooksRecommendService {

    private static final Logger LOGGER = LoggerFactory.getLogger(BooksRecommendServiceImpl.class);

    private BooksRecommendRepo booksRecommendRepo;
    private ValidationMessages validationMessages;
    private CommonService commonService;
    private BooksRepo booksRepo;
    private TransactionalConfig transactionConfig;

    @Autowired
    public BooksRecommendServiceImpl(BooksRecommendRepo booksRecommendRepo, ValidationMessages validationMessages,
                                     CommonService commonService, BooksRepo booksRepo, TransactionalConfig transactionConfig) {
        this.booksRecommendRepo = booksRecommendRepo;
        this.validationMessages = validationMessages;
        this.commonService = commonService;
        this.booksRepo = booksRepo;
        this.transactionConfig = transactionConfig;
    }

    @Override
    public List<BookRecommendationEntity> getBooksRecommendations() {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.getBooksRecommendations()");
        final List<BookRecommendationEntity> bookRecommendations = booksRecommendRepo.findAll();
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.getBooksRecommendations()");
        return bookRecommendations;
    }

    @Override
    public Map<Object, Object> saveBookRecommendation(final BookRecommendationDTO bookRecDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.saveBookRecommendation()");
        final Map<Object, Object> response = new HashMap<>();
        final BookRecommendationEntity bookRecommendation = setBookRecommendationData(bookRecDetails);
        try {
            //Transaction start
            transactionConfig.startTransaction();
            booksRecommendRepo.save(bookRecommendation);

            //Transcation commit
            transactionConfig.commit();
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            //Roll back
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("bookRecommendation", bookRecommendation);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.saveBookRecommendation()");
        return response;
    }

    @Override
    public BookRecommendationEntity getBookRecommendation(final long bookRecId) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.getBookRecommendation()");
        final BookRecommendationEntity bookRecommendation = booksRecommendRepo.findByRecommendId(bookRecId);
        if (bookRecommendation == null) {
            throw new RecordNotFoundException(validationMessages.getExceptionMessage(BOOK_REC_NOT_FOUND));
        }
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.getBookRecommendation()");
        return bookRecommendation;
    }

    @Override
    public Map<Object, Object> updateBookRecommendation(final long bookRecId,
                                                        final BookRecommendationDTO bookRecDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.updateBookRecommendation()");
        final Map<Object, Object> response = new HashMap<>();
        final BookRecommendationEntity existingCopy = getBookRecommendation(bookRecId);
        BookRecommendationEntity bookRecommendation = setBookRecommendationData(bookRecDetails);
        try {
            //Transaction start ::
            transactionConfig.startTransaction();
            bookRecommendation.setCreatedOn(existingCopy.getCreatedOn());
            bookRecommendation = booksRecommendRepo.update(bookRecommendation);

            //Transcation commit
            transactionConfig.commit();
        } catch (DbException e) {
            LOGGER.error("Exception occurred ", e);
            //Roll back
            transactionConfig.rollBack();
            throw new DbException(e.getMessage());
        }
        response.put("bookRecommendation", bookRecommendation);
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.updateBookRecommendation()");
        return response;
    }

    private BookRecommendationEntity setBookRecommendationData(final BookRecommendationDTO bookRecDetails) {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.setBookRecommendationData()");
        final BookRecommendationEntity bookRecommendation = new BookRecommendationEntity();
        bookRecommendation.setRecommendId(bookRecDetails.getRecommendId());
        bookRecommendation.setBookId(bookRecDetails.getBookId());
        bookRecommendation.setInfluencerId(bookRecDetails.getInfluencerId());
        bookRecommendation.setCreatedBy(bookRecDetails.getCreatedBy());
        bookRecommendation.setCreatedOn(new Timestamp(new Date().getTime()));
        bookRecommendation.setModifiedOn(new Timestamp(new Date().getTime()));
        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.setBookRecommendationData()");
        return bookRecommendation;
    }

    @Override
    public Map<Object, Object> getCategoryWiseBooksRec() {
        LOGGER.debug("Start :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.getCategoryWiseBooksRec()");
        final Map<Object, Object> response = new HashMap<>();
        List<BookRecommendationEntity> bookRecommendations = booksRecommendRepo.findAll();
        final String influencersKey = "influencers";
        final List<String> keys = new ArrayList<>();
        keys.add(influencersKey);
        final TreeMap<Long, String> recBasedOnInfluencers = new TreeMap<>();
        final Set<BookRecommendationDTO> booksRecCategoryWise = new HashSet<>();
        bookRecommendations.stream().filter(Objects::nonNull).forEach(recommendation -> {
            String bookIds = "";
            if (recBasedOnInfluencers.containsKey(recommendation.getInfluencerId())) {
                bookIds = recBasedOnInfluencers.get(recommendation.getInfluencerId());
            }
            if (bookIds.equals("")) {
                bookIds += recommendation.getBookId();
            } else {
                bookIds = bookIds + "," + recommendation.getBookId();
            }
            recBasedOnInfluencers.put(recommendation.getInfluencerId(), bookIds);
        });

        final Map<Object, List<HashMap>> influencersData = commonService.getDropDownData(keys);
        final List<HashMap> influencersList = influencersData.get(influencersKey);
        recBasedOnInfluencers.forEach((key, value) -> {
            final BookRecommendationDTO bookRecDetails = new BookRecommendationDTO();
            influencersList.stream().filter(Objects::nonNull).forEach(influencer -> {
                if (influencer.get("influencer_id") != null && influencer.get("influencer_id").equals(key)
                        && influencer.get("influencer_name") != null) {
                    bookRecDetails.setInfluencerName(influencer.get("influencer_name").toString());
                    bookRecDetails.setInfluencerId(key);
                }
            });
            final List<BookDTO> books = booksRepo.findAllByBookIds(value);
            bookRecDetails.setRecommendedBooks(books);
            booksRecCategoryWise.add(bookRecDetails);
        });
        response.put("categoryWiseBooks", booksRecCategoryWise);

        LOGGER.debug("End :com.omniwyse.booksapi.servicesimpl.BooksRecommendServiceImpl.getCategoryWiseBooksRec()");
        return response;
    }

}
