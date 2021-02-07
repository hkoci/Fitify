package uk.ac.brunel.group7.fitify.rest;

import uk.ac.brunel.group7.fitify.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.fitify.config.RestExceptionHandler;
import uk.ac.brunel.group7.fitify.model.StepDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class StepControllerIT extends BaseIT {

    @Test
    @Sql("/data/stepData.sql")
    public void getAllSteps_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<StepDTO>> response = restTemplate.exchange(
                "/api/activities/step", HttpMethod.GET, request, new ParameterizedTypeReference<List<StepDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1500, response.getBody().get(0).getActivityStepID());
    }

    @Test
    @Sql("/data/stepData.sql")
    public void getStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<StepDTO> response = restTemplate.exchange(
                "/api/activities/step/1500", HttpMethod.GET, request, StepDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)27, response.getBody().getActivityID());
    }

    @Test
    public void getStep_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/activities/step/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/stepDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/activities/step", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, stepRepository.count());
    }

    @Test
    public void createStep_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/stepDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/activities/step", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("activityID", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/stepData.sql")
    public void updateStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/stepDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/activities/step/1500", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)28, stepRepository.findById((long)1500).get().getActivityID());
    }

    @Test
    @Sql("/data/stepData.sql")
    public void deleteStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/activities/step/1500", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, stepRepository.count());
    }

}
