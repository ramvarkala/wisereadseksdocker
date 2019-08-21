package com.omniwyse.booksapi.services;

import com.omniwyse.booksapi.dto.UserRoleMaintainDTO;

import java.util.List;
import java.util.Map;

public interface UserRoleService {
    Map<Object, Object> saveUserRoles(List<UserRoleMaintainDTO> userRoles);

    Map<Object, Object> updateUserRoles(List<UserRoleMaintainDTO> userRoles);

    List<UserRoleMaintainDTO> getUserRoles();
}
