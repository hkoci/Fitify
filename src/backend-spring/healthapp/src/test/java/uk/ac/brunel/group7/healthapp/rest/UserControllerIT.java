package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.UserDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserControllerIT extends BaseIT {

    @Test
    @Sql("/data/userData.sql")
    public void getAllUsers_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<List<UserDTO>> response = restTemplate.exchange(
                "/api/users", HttpMethod.GET, request, new ParameterizedTypeReference<>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1000, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/userData.sql")
    public void getUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<UserDTO> response = restTemplate.exchange(
                "/api/users/1000", HttpMethod.GET, request, UserDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Aenean pulvinar...", response.getBody().getUsername());
    }

    @Test
    public void getUser_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("CustomNotFoundException", response.getBody().getException());
    }

    @Test
    public void createUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/users", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, userRepository.count());
    }

    @Test
    public void createUser_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("username", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/userData.sql")
    public void updateUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/1000", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Aenean pulvinar...", userRepository.findById((long)1000).get().getUsername());
    }

    @Test
    @Sql("/data/userData.sql")
    public void deleteUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/1000", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userRepository.count());
    }

}
