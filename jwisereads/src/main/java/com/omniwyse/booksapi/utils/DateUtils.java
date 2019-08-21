package com.omniwyse.booksapi.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {

    public static long getDaysDiff(Date startDate, Date endDate) {
        long diff = startDate.getTime() - endDate.getTime();
        long daysDiff = (diff / (24 * 60 * 60 * 1000));
        if (daysDiff == 0) {
            long diffHours = diff / (60 * 60 * 1000) % 24;
            if (diffHours > 0) {
                return 1;
            } else {
                long diffMinutes = diff / (60 * 1000) % 60;
                if (diffMinutes > 0) {
                    return 1;
                } else {
                    long diffSeconds = diff / 1000 % 60;
                    if (diffSeconds > 0) {
                        return 1;
                    }else{
                        return 0;
                    }
                }
            }
        } else {
            return daysDiff;
        }
    }

    public static String convertDate(Date date){
        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        return format.format(date);
    }

}
