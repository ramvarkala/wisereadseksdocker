package com.omniwyse.booksapi.utils;

import java.sql.SQLIntegrityConstraintViolationException;
import java.sql.SQLSyntaxErrorException;

public class ExceptionUtils {

	public static boolean isCause(Class<? extends Throwable> expected, Throwable exc) {
		return expected.isInstance(exc) || (exc != null && isCause(expected, exc.getCause()));
	}
	
	public static boolean isSqlConstraintException(Class<? extends Throwable> expected) {
		return isCause(expected, new SQLIntegrityConstraintViolationException());
	}

	public static boolean isSQLSyntaxErrorException(Class<? extends Throwable> expected) {
		return isCause(expected, new SQLSyntaxErrorException());
	}

}
