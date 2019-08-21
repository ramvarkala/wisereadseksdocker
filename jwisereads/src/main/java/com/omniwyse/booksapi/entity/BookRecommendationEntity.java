package com.omniwyse.booksapi.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="books_recommendations")
public class BookRecommendationEntity extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long recommendId;
	private long bookId;
	private long influencerId;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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

}
