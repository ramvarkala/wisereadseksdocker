package com.omniwyse.booksapi.servicesimpl;


import com.omniwyse.booksapi.dto.UserDetailsDTO;
import com.omniwyse.booksapi.exceptions.EmailAlreadyRegisteredException;
import com.omniwyse.booksapi.services.UserService;
import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static com.omniwyse.booksapi.constants.AppConstants.VALIDATION_FAILED;
import static org.springframework.test.util.AssertionErrors.assertEquals;

@SpringBootTest
public class UserServiceImplTest {

    @Mock
    private UserService userService;

    @Test
    public void getUsers() {
    }

    @DisplayName("Saving new user...")
    @Test
    public void saveUser() {
        UserDetailsDTO user = new UserDetailsDTO();
        user.setAddress("Hitech");
        user.setFirstName("Jim");
        user.setCompanyName("Omniwyse");
        user.setEmail("harish@omniwyse.com");
        user.setGenderId(1);
        user.setPassword("jim");
        user.setContactNumber(4654315311L);
        user.setCreatedBy("harish");
        user.setUserStatusId(1);

        Assertions.assertThrows(EmailAlreadyRegisteredException.class, () -> userService.saveUser(user));
        user.setEmail("jim1a@gmail.com");
        Map<Object, Object> response = userService.saveUser(user);
        assertEquals("Failure test", true, !response.containsKey(VALIDATION_FAILED));
    }

    @Test
    @DisplayName("Getting saved User ..")
    public void getUser() {
       // UserDetailsDTO user = userService.getUser()
       // Assertions.assertEquals();
    }

    @Test
    public void updateUser() {
    }

    @Test
    public void setUserData() {
    }

    @Test
    public void changeUserPassword() {
    }

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void getUsers1() {
    }

    @Test
    void saveUser1() {
    }

    @Test
    void getUser1() {
    }

    @Test
    void updateUser1() {
    }

    @Test
    void setUserData1() {
    }

    @Test
    void changeUserPassword1() {
    }
}
