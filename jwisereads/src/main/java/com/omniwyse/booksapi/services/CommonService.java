package com.omniwyse.booksapi.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface CommonService {
	
	public Map<Object, List<HashMap>> getDropDownData(final List<String> tablesKeys);

}
