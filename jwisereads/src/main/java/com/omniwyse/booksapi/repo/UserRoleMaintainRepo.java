package com.omniwyse.booksapi.repo;

import com.omniwyse.booksapi.dto.UserRoleMaintainDTO;
import com.omniwyse.booksapi.entity.UserRoleMaintainEntity;

import java.util.List;

public interface UserRoleMaintainRepo {

    List<UserRoleMaintainEntity> findByUserId(long userId);

    UserRoleMaintainEntity save(UserRoleMaintainEntity userRoleMaintain);

    UserRoleMaintainEntity update(UserRoleMaintainEntity userRole);

    List<UserRoleMaintainDTO> findRolesByUserId(long userId);

    UserRoleMaintainEntity findByUserIdAndRoleId(long userId, long roleId);

}
