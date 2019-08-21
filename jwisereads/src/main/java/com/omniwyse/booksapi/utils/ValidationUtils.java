package com.omniwyse.booksapi.utils;

import java.util.Date;

public class ValidationUtils {

    public static boolean checkEmptyOrNull(String value){
        return value == null || value.equals("");
    }

    public static boolean checkEmptyOrNull(Date value){
        return value == null || value.equals("");
    }

    public static boolean checkZeroOrLessThan(int value){
        return value == 0;
    }

    public static boolean checkZeroOrLessThan(long value){
        return value == 0;
    }
}
