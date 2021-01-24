package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.PostDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class PostControllerIT extends BaseIT {

    @Test
    @Sql("/data/postData.sql")
    public void getAllPosts_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<PostDTO>> response = restTemplate.exchange(
                "/api/posts", HttpMethod.GET, request, new ParameterizedTypeReference<List<PostDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1400, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/postData.sql")
    public void getPost_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<PostDTO> response = restTemplate.exchange(
                "/api/posts/1400", HttpMethod.GET, request, PostDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)67, response.getBody().getUserPosted());
    }

    @Test
    public void getPost_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/posts/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createPost_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/postDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/posts", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, postRepository.count());
    }

    @Test
    public void createPost_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/postDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/posts", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("userPosted", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/postData.sql")
    public void updatePost_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/postDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/posts/1400", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)68, postRepository.findById((long)1400).get().getUserPosted());
    }

    @Test
    @Sql("/data/postData.sql")
    public void deletePost_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/posts/1400", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, postRepository.count());
    }

}
