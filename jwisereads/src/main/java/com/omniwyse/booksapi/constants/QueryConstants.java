package com.omniwyse.booksapi.constants;

public class QueryConstants {
	
	public static final String BOOKS_LIST ="select * from books_info";
	public static final String BOOKS_RECOMMENDATIONS_LIST ="select * from books_recommendations";
	public static final String USERS_LIST ="select * from user_details";
	public static final String INVENTORY_BOOKS_LIST ="select * from books_inventory";
	public static final String BOOKS_OWNERS_LIST ="select * from books_owners";
	public static final String CHECKED_OUT_BOOKS_LIST ="select * from books_checkout_details";
	public static final String CHECKOUT_PAYMENTS_LIST ="select * from checkout_payment_details";
	public static final String PARAMETERS_LIST ="select * from parameters";
	
	public static final String GET_INV_BOOK_CHECKOUT_STATUS ="SELECT * FROM books_checkout_details where inventory_id =? and checkout_id= (select max(checkout_id) from books_checkout_details where inventory_id = ?)";
	
	
	
	/// Join queries
	
	public static final String INVENTORY_BOOKS_DATA ="select bc.*,bi.title,bi.rent_per_day,bi.book_price,ic.influencer_name,bs.availability from books_info bi inner join books_inventory bc on bc.book_id = bi.book_id left join influencers ic on ic.influencer_id = recommended_by inner join books_status bs on bs.availability_id = bc.availability_id";
	public static final String CHECKED_OUT_BOOKS_DATA ="SELECT bc.*, bi.title, bi.author, bi.publisher, bi.book_cover_page, bi.book_price, bi.edition, bi.book_description, bcs.checked_status, ud.first_name, ud.last_name, ud.email, ud.contact_number, opd.due_amount, opd.advance_paid, bi.rent_per_day, bi.images_url1, bi.images_url2 FROM books_checkout_details bc LEFT JOIN books_info bi ON bc.book_id = bi.book_id INNER JOIN book_checked_status bcs ON bcs.checked_status_id = bc.checked_status_id LEFT JOIN user_details ud ON ud.user_id = bc.user_id INNER JOIN order_payment_details opd ON opd.order_id = bc.order_id";
	public static final String BOOKS_LIST_DATA ="SELECT bi.*, bc.inventory_id, bc.availability_id, ic.influencer_name, bs.availability, bg.genre, ud.email AS owner_email, ud.first_name as owner_first_name, ud.last_name as owner_last_name,ud.contact_number as owner_contact_number FROM books_info bi INNER JOIN books_inventory bc ON bc.book_id = bi.book_id LEFT JOIN books_recommendations br ON bi.book_id = br.book_id LEFT JOIN influencers ic ON ic.influencer_id = br.influencer_id INNER JOIN books_status bs ON bs.availability_id = bc.availability_id LEFT JOIN book_genre bg ON bg.genre_id = bi.genre_id LEFT JOIN user_details ud ON ud.user_id = bi.owner_id";
	public static final String BOOKS_META_DATA ="SELECT bi.*, ic.influencer_name, bg.genre, ud.email AS owner_email, ud.first_name AS owner_first_name, ud.last_name AS owner_last_name, ud.contact_number as owner_contact_number FROM books_info bi LEFT JOIN books_recommendations br ON bi.book_id = br.book_id LEFT JOIN influencers ic ON ic.influencer_id = br.influencer_id LEFT JOIN book_genre bg ON bg.genre_id = bi.genre_id LEFT JOIN user_details ud ON ud.user_id = bi.owner_id";
	public static final String GET_USER_ROLES_DATA ="select um.*,rs.role as role_name from user_role_maintain um inner join roles rs on rs.role_id = um.role_id";

}
