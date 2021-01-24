package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.UserDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserControllerIT extends BaseIT {

    @Test
    public void getAllUsers_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<UserDTO>> response = restTemplate.exchange(
                "/api/users", HttpMethod.GET, request, new ParameterizedTypeReference<List<UserDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1000, response.getBody().get(0).getId());
    }

    @Test
    public void getAllUsers_unauthorized() {
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        final HttpEntity<String> request = new HttpEntity<>(null, headers);
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Unauthorized", response.getBody().getException());
    }

    @Test
    public void getUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<UserDTO> response = restTemplate.exchange(
                "/api/users/1000", HttpMethod.GET, request, UserDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Ut pellentesque sapien...", response.getBody().getRole());
    }

    @Test
    public void getUser_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/users", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(2, userRepository.count());
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
    public void updateUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/1000", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Cras sed interdum...", userRepository.findById((long)1000).get().getRole());
    }

    @Test
    public void deleteUser_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/1000", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userRepository.count());
    }

}
