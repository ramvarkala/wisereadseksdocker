package com.omniwyse.booksapi.dto;

import java.util.List;

import javax.persistence.Column;

public class BookRecommendationDTO extends BaseDTO {

	private long recommendId;
	private long bookId;
	private long influencerId;
	private String influencerName;
	private List<BookDTO> recommendedBooks;

	@Column(name = "recommend_id")
	public long getRecommendId() {
		return recommendId;
	}

	public void setRecommendId(long recommendId) {
		this.recommendId = recommendId;
	}

	@Column(name = "book_id")
	public long getBookId() {
		return bookId;
	}

	public void setBookId(long bookId) {
		this.bookId = bookId;
	}

	@Column(name = "influencer_id")
	public long getInfluencerId() {
		return influencerId;
	}

	public void setInfluencerId(long influencerId) {
		this.influencerId = influencerId;
	}

	public String getInfluencerName() {
		return influencerName;
	}

	public void setInfluencerName(String influencerName) {
		this.influencerName = influencerName;
	}

	public List<BookDTO> getRecommendedBooks() {
		return recommendedBooks;
	}

	public void setRecommendedBooks(List<BookDTO> recommendedBooks) {
		this.recommendedBooks = recommendedBooks;
	}

}
