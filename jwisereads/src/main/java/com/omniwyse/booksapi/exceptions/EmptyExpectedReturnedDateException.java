package com.omniwyse.booksapi.exceptions;

public class EmptyExpectedReturnedDateException extends WiseReadsUncheckedException{

    public EmptyExpectedReturnedDateException(String message,String title, long inventoryId) {
        super(message);
    }

    private String title;
    private long inventoryId;

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
