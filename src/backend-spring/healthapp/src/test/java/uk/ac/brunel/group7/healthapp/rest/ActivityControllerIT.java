package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.ActivityDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class ActivityControllerIT extends BaseIT {

    @Test
    @Sql("/data/activityData.sql")
    public void getAllActivitys_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<ActivityDTO>> response = restTemplate.exchange(
                "/api/activitys", HttpMethod.GET, request, new ParameterizedTypeReference<List<ActivityDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1100, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/activityData.sql")
    public void getActivity_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<ActivityDTO> response = restTemplate.exchange(
                "/api/activitys/1100", HttpMethod.GET, request, ActivityDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)62, response.getBody().getActivityUserId());
    }

    @Test
    public void getActivity_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/activitys/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createActivity_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/activityDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/activitys", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, activityRepository.count());
    }

    @Test
    public void createActivity_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/activityDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/activitys", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("activityUserId", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/activityData.sql")
    public void updateActivity_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/activityDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/activitys/1100", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)63, activityRepository.findById((long)1100).get().getActivityUserId());
    }

    @Test
    @Sql("/data/activityData.sql")
    public void deleteActivity_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/activitys/1100", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, activityRepository.count());
    }

}
