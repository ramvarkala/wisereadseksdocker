package com.omniwyse.booksapi.exceptions;

public class BookAlreadyCheckedOutException extends WiseReadsUncheckedException {
    private String title;
    private long inventoryId;
    public BookAlreadyCheckedOutException(String message,String title, long inventoryId)
    {
        super(message);
        this.title = title;
        this.inventoryId = inventoryId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getInventoryId() {
        return inventoryId;
    }

    public void setInventoryId(long inventoryId) {
        this.inventoryId = inventoryId;
    }
}
