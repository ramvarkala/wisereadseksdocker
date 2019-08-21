package com.omniwyse.booksapi.servicesimpl;

import com.dieselpoint.norm.DbException;
import com.omniwyse.booksapi.db.DBFactory;
import com.omniwyse.booksapi.services.CommonService;
import com.omniwyse.booksapi.utils.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class CommonServiceImpl implements CommonService {

    private static final Map<Object, Object> DROP_DOWNS_MAP = new HashMap<>();// key = unique key , value = table name
    private static final Map<Object, List<HashMap>> TABLES_CACHE_DATA = new HashMap<>();

    private DBFactory dbFactory;

    @Autowired
    public CommonServiceImpl(DBFactory dbFactory) {
        this.dbFactory = dbFactory;
    }


    static {

        DROP_DOWNS_MAP.put("roles", "roles");
        DROP_DOWNS_MAP.put("userStatus", "user_status");
        DROP_DOWNS_MAP.put("bookGenre", "book_genre");
        DROP_DOWNS_MAP.put("bookCheckedStatus", "book_checked_status");
        DROP_DOWNS_MAP.put("bookCondition", "book_condition");
        DROP_DOWNS_MAP.put("gender", "gender");
        DROP_DOWNS_MAP.put("booksStatus", "books_status");
        DROP_DOWNS_MAP.put("influencers", "influencers");

    }

    /***
     *
     */
    @Override
    public Map<Object, List<HashMap>> getDropDownData(List<String> tablesKeys) {
        Map<Object, List<HashMap>> tablesData = new HashMap<>();
        try {
            tablesKeys.stream().filter(Objects::nonNull).forEach(tableKey -> {
                //if (TABLES_CACHE_DATA.containsKey(tableKey)) {
                    //tablesData.put(tableKey, TABLES_CACHE_DATA.get(tableKey));
                //} else {
                    List<HashMap> data = dbFactory.getDb().sql("select * from " + DROP_DOWNS_MAP.get(tableKey))
                            .results(HashMap.class);
                    //TABLES_CACHE_DATA.put(tableKey, data);
                    tablesData.put(tableKey, data);
                //}
            });
        } catch (DbException e) {
            if (ExceptionUtils.isSQLSyntaxErrorException(e.getCause().getClass())) {
                throw new DbException("Table/Key not found");
            }
        }
        return tablesData;
    }

}
