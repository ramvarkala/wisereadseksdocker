package com.omniwyse.booksapi.commons;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class Converter {

	public BigDecimal getBigDecimalVal(double val) {
		return new BigDecimal(val, MathContext.DECIMAL64);
	}

	public BigDecimal getBigDecimalVal(long val) {
		return new BigDecimal(val, MathContext.DECIMAL64);
	}

	/*public long getDaysDiff(Date endDate) {
		Date currentDate = new Date();
		long difference = 0;
		if (endDate != null) {
			difference = (currentDate.getTime() - endDate.getTime()) / 86400000;
		}
		return Math.abs(difference);
	}*/
	
	public long getDaysDiff(Date startDate,Date endDate) {
		long difference = 0;
		if (endDate != null) {
			difference = (startDate.getTime() - endDate.getTime()) / 86400000;
		}
		return Math.abs(difference);
	}

	public static String capitalFirstLetter(String name){
		if(name!= null && name.length() >0){
			return name.substring(0,1).toUpperCase()+name.substring(1);
		}
		return  "";
	}

}
