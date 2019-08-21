package com.omniwyse.booksapi.utils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JSONResultEntity<T> {

    private boolean success;
    private String message;
    public List<T> results;
    public Map<Object, Object> resultsMap;
    public Object result;
    private Map<Object, Object> errors = new HashMap<>();
    private Long sequenceNumber;
    private Long totalElements;
    private Integer totalPages;


    //Constructor for Results
    public JSONResultEntity(boolean success, String message,List<T> results){
        this.success = success;
        this.message = message;
        this.results = results;
    }

    //Constructor for Result
    public JSONResultEntity(boolean success, String message,T result){
        this.success = success;
        this.message = message;
        this.result = result;
    }

    //Constructor for ResultsMap
    public JSONResultEntity(boolean success, String message,Map<Object, Object> resultsMap){
        this.success = success;
        this.message = message;
        this.resultsMap = resultsMap;
    }

    //Constructor for Errors
    public JSONResultEntity(boolean success, String message,Map<Object, Object> resultsMap, Map<Object, Object> errors){
        this.success = success;
        this.errors = errors;
        this.resultsMap = resultsMap;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Map<Object, Object> getErrors() {
        return errors;
    }

    public void setErrors(Map<Object, Object> errors) {
        this.errors = errors;
    }

    public List<T> getResults() {
        return results;
    }

    public void setResults(List<T> results) {
        this.results = results;
    }

    public Long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(Long totalElements) {
        this.totalElements = totalElements;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }

    public Map<Object, Object> getResultsMap() {
        return resultsMap;
    }

    public void setResultsMap(Map<Object, Object> resultsMap) {
        this.resultsMap = resultsMap;
    }

    public Long getSequenceNumber() {
        return sequenceNumber;
    }

    public void setSequenceNumber(Long sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
    }

}
