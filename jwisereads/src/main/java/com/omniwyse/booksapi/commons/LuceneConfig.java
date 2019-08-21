package com.omniwyse.booksapi.commons;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.Term;
import org.apache.lucene.search.*;
import org.apache.lucene.store.ByteBuffersDirectory;
import org.apache.lucene.store.Directory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.omniwyse.booksapi.dto.BookDTO;
import com.omniwyse.booksapi.repo.BooksRepo;
import com.omniwyse.booksapi.repoimpl.BooksRepoImpl;

@Component
public class LuceneConfig {

	private static final Logger LOGGER = LoggerFactory.getLogger(BooksRepoImpl.class);
	private static final String TITLE = "title";
	private static final String PUBLISHER = "publisher";
	private static final String AUTHOR = "author";
	private static final String GENRE = "genre";
	private static final String EXCEPTION_MSG = "exception occured while luecene indexing ";

	@Autowired
	public LuceneConfig(BooksRepo booksRepo) {
		///final List<BookDTO> books = booksRepo.findAll();
		//addBooksToLuceneLibrary(books, "");
	}

	public String addBooksToLuceneLibrary(List<BookDTO> books, String searchInput) {
		StandardAnalyzer analyzer = new StandardAnalyzer();
		Directory index = new ByteBuffersDirectory();
		StringBuilder bookIds = new StringBuilder();
		IndexReader reader = null;
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		try (final IndexWriter indexWriter = new IndexWriter(index, config);) {
			books.stream().filter(Objects::nonNull).forEach(book -> {
				try {
					addDoc(indexWriter, book);
				} catch (IOException e) {
					LOGGER.error(EXCEPTION_MSG, e);
				}
			});
			indexWriter.close();
			if (!searchInput.equals("")) {
				int hitsPerPage = 10;
				TopDocs docs = null;
				reader = DirectoryReader.open(index);
				IndexSearcher searcher = new IndexSearcher(reader);
				//Term term = new Term(TITLE, "*" + searchInput + "*");
				searchInput = "*" + searchInput + "*";

				//Adding multiple query params
				Query query1 = new WildcardQuery(new Term(TITLE, searchInput));
				Query query2 = new WildcardQuery(new Term(PUBLISHER, searchInput));
				Query query3 = new WildcardQuery(new Term(AUTHOR, searchInput));
				Query query4 = new WildcardQuery(new Term(GENRE, searchInput));
				BooleanQuery booleanQuery = new BooleanQuery.Builder()
						.add(query1, BooleanClause.Occur.SHOULD)
						.add(query2, BooleanClause.Occur.SHOULD)
						.add(query3, BooleanClause.Occur.SHOULD)
						.add(query4, BooleanClause.Occur.SHOULD)
						.build();

				///Query query = new WildcardQuery(term);
				docs = searcher.search(booleanQuery, hitsPerPage);
				ScoreDoc[] hits = docs.scoreDocs;

				LOGGER.debug("Found hits : " + hits.length);
				for (int i = 0; i < hits.length; ++i) {
					int docId = hits[i].doc;
					Document d;
					d = searcher.doc(docId);
					if (bookIds.length() == 0) {
						bookIds.append(d.get("id"));
					} else {
						bookIds.append(",");
						bookIds.append(d.get("id"));
					}
					LOGGER.debug("id : " + d.get("id") + ". " + d.get("isbn") + "\t" + d.get(TITLE));
				}
				reader.close();

			}
		} catch (IOException e) {
			LOGGER.error(EXCEPTION_MSG, e);
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					LOGGER.error(EXCEPTION_MSG, e);
				}
			}
		}
		return bookIds.toString();
	}

	private static void addDoc(final IndexWriter indexWriter, final BookDTO book) throws IOException {
		final Document doc = new Document();
		doc.add(new TextField("id", String.valueOf(book.getBookId()), Field.Store.YES));
		if (book.getTitle() != null) {
			doc.add(new StringField(TITLE, book.getTitle().toLowerCase(), Field.Store.YES));
		}
		/*if (book.getIsbnCode() != null) {
			doc.add(new StringField("isbn", book.getIsbnCode().toLowerCase(), Field.Store.YES));
		}*/
		if (book.getBookDescription() != null) {
			doc.add(new StringField(GENRE, book.getGenre().toLowerCase(), Field.Store.YES));
		}
		if (book.getAuthor() != null) {
			doc.add(new StringField(AUTHOR, book.getAuthor().toLowerCase(), Field.Store.YES));
		}
		if (book.getAuthor() != null) {
			doc.add(new StringField(PUBLISHER, book.getPublisher().toLowerCase(), Field.Store.YES));
		}
		indexWriter.addDocument(doc);
	}

}
