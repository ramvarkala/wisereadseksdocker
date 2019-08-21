package com.omniwyse.booksapi.resource;

import com.omniwyse.booksapi.dto.UserDetailsDTO;
import com.omniwyse.booksapi.exceptions.RecordNotFoundException;
import com.omniwyse.booksapi.services.UserService;
import com.omniwyse.booksapi.utils.DbExceptionHandler;
import com.omniwyse.booksapi.utils.TestUtils;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.HashMap;
import java.util.Map;

import static com.omniwyse.booksapi.constants.AppConstants.CREATE_SUCCESSFUL;
import static com.omniwyse.booksapi.constants.AppConstants.VALIDATION_FAILED;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UserResourceTest {

    private MockMvc mockmvc;

    @InjectMocks
    private UserResource userResource;

    @Mock
    private UserService userService;
    private UserDetailsDTO user;

    @BeforeAll
    public void setUp() {
        mockmvc = MockMvcBuilders.standaloneSetup(userResource)
                .setControllerAdvice(new DbExceptionHandler())
                .build();

        user = new UserDetailsDTO();
        user.setUserId(1);
        user.setAddress("Hitech");
        user.setFirstName("Jim");
        user.setCompanyName("Omniwyse");
        user.setEmail("harish.thatha@omniwyse.com");
        user.setGenderId(1);
        user.setPassword("jim");
        user.setContactNumber(4654315311L);
        user.setCreatedBy("Harish");
        user.setUserStatusId(1);
        user.setRoleId(1);
    }

    @AfterAll
    public void flush() {
        user = null;
    }

    @Nested
    @DisplayName("Saving new User")
    class SaveUserTest {
        @Test
        @DisplayName("With correct data , no empty fields")
        public void saveUserWithFullDetails() throws Exception {
            Map<Object, Object> responseData = new HashMap<>();
            responseData.put("user", user);
            when(userService.saveUser(any())).thenReturn(responseData);
            // String response = mockmvc.perform(
            mockmvc.perform(
                    post("/api/users").accept(MediaType.APPLICATION_JSON)
                            .content(TestUtils.convertObjectToJsonBytes(user)).contentType(MediaType.APPLICATION_JSON)
            )
                    .andExpect(status().isOk())
                    // .andReturn().getResponse().getContentAsString();
                    .andExpect(jsonPath("$.success", Matchers.is(true)))
                    .andExpect(jsonPath("$.message", Matchers.is(CREATE_SUCCESSFUL)))
                    .andExpect(jsonPath("$.resultsMap.user.userId", Matchers.is(1)))
                    .andExpect(jsonPath("$.resultsMap.user.address", Matchers.is("Hitech")))
                    .andExpect(jsonPath("$.resultsMap.user.firstName", Matchers.is("Jim")))
                    .andExpect(jsonPath("$.resultsMap.user.companyName", Matchers.is("Omniwyse")))
                    .andExpect(jsonPath("$.resultsMap.user.email", Matchers.is("harish.thatha@omniwyse.com")))
                    .andExpect(jsonPath("$.resultsMap.user.contactNumber", Matchers.is(4654315311L)))
                    .andExpect(jsonPath("$.resultsMap.user.userStatusId", Matchers.is(1)))
                    .andExpect(jsonPath("$.resultsMap.user.createdBy", Matchers.is("Harish")))
                    .andExpect(jsonPath("$.resultsMap.user.roleId", Matchers.is(1)))
                    .andExpect(jsonPath("$.resultsMap.user.genderId", Matchers.is(1)));
            //System.out.println(response);
        }

        @Test
        @DisplayName("With empty fields")
        public void saveEmptyUser() throws Exception {
            Map<Object, Object> responseData = new HashMap<>();
            responseData.put(VALIDATION_FAILED, true);
            //Basically We will get all the messages for empty fields , we need to write for all of them
            responseData.put("email", "Email can not be empty");
            responseData.put("firstName", "First name can not be empty");
            when(userService.saveUser(any())).thenReturn(responseData);
            //String response = mockmvc.perform((post("/api/users").accept(MediaType.APPLICATION_JSON)
            mockmvc.perform(post("/api/users").accept(MediaType.APPLICATION_JSON)
                    .content(TestUtils.convertObjectToJsonBytes(new UserDetailsDTO()))
                    .contentType(MediaType.APPLICATION_JSON))
                    //.andReturn().getResponse().getContentAsString();
                    .andExpect(status().isBadRequest())
                    .andExpect(jsonPath("$.success", Matchers.is(false)))
                    .andExpect(jsonPath("$.errors.validationFailed", Matchers.is(true)))
                    .andExpect(jsonPath("$.errors.email", Matchers.is("Email can not be empty")))
            .andExpect(jsonPath("$.errors.firstName",Matchers.is("First name can not be empty")));
            // System.out.println(response);
        }
    }


    @Test
    @DisplayName("When updating the existing user")
    public void updateUser() {

    }

    @Nested
    @DisplayName("When fetching the user")
    class GetUserTest {
        @Test
        @DisplayName("existing user")
        public void testExistingUser() throws Exception {

            when(userService.getUser(1)).thenReturn(user);
            String res = mockmvc.perform(get("/api/users/1")
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
            ).andExpect(status().isOk())
                    .andReturn().getResponse().getContentAsString();
            Assertions.assertEquals(true, res.contains("Jim"));
            System.out.println("res is " + res);

        }

        @Test
        @DisplayName("Non existing user")
        public void testNonExistingUser() throws Exception{
            when(userService.getUser(10)).thenThrow(new RecordNotFoundException("User not found"));
           //String res =  mockmvc.perform(get("/api/users/10").accept(MediaType.APPLICATION_JSON)
           mockmvc.perform(get("/api/users/10").accept(MediaType.APPLICATION_JSON)
            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNotFound())
           //        .andReturn().getResponse().getContentAsString();
           .andExpect(jsonPath("$.errors.notFound.msg",Matchers.is("User not found")));
            //System.out.println("REsponse is "+res);
        }

    }

    @Test
    @DisplayName("When fetching the existing users")
    public void getUsers() {

    }

    @Test
    @DisplayName("While changing the password")
    public void changeUserPassword() {
    }
}