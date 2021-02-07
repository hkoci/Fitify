package uk.ac.brunel.group7.fitify.rest;

import uk.ac.brunel.group7.fitify.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.fitify.config.RestExceptionHandler;
import uk.ac.brunel.group7.fitify.model.SleepTrackerDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class SleepTrackerControllerIT extends BaseIT {

    @Test
    @Sql("/data/sleepTrackerData.sql")
    public void getAllSleepTrackers_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<SleepTrackerDTO>> response = restTemplate.exchange(
                "/api/activities/sleep", HttpMethod.GET, request, new ParameterizedTypeReference<List<SleepTrackerDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1700, response.getBody().get(0).getActivitySleepID());
    }

    @Test
    @Sql("/data/sleepTrackerData.sql")
    public void getSleepTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<SleepTrackerDTO> response = restTemplate.exchange(
                "/api/activities/sleep/1700", HttpMethod.GET, request, SleepTrackerDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)27, response.getBody().getActivityID());
    }

    @Test
    public void getSleepTracker_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/activities/sleep/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createSleepTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/sleepTrackerDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/activities/sleep", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, sleepTrackerRepository.count());
    }

    @Test
    public void createSleepTracker_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/sleepTrackerDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/activities/sleep", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("activityID", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/sleepTrackerData.sql")
    public void updateSleepTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/sleepTrackerDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/activities/sleep/1700", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)28, sleepTrackerRepository.findById((long)1700).get().getActivityID());
    }

    @Test
    @Sql("/data/sleepTrackerData.sql")
    public void deleteSleepTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/activities/sleep/1700", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, sleepTrackerRepository.count());
    }

}
