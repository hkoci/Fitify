package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.StepDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class StepControllerIT extends BaseIT {

    @Test
    @Sql("/data/stepData.sql")
    public void getAllSteps_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<List<StepDTO>> response = restTemplate.exchange(
                "/api/steps", HttpMethod.GET, request, new ParameterizedTypeReference<>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1500, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/stepData.sql")
    public void getStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<StepDTO> response = restTemplate.exchange(
                "/api/steps/1500", HttpMethod.GET, request, StepDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(76, response.getBody().getPedometerCount());
    }

    @Test
    public void getStep_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/steps/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("CustomNotFoundException", response.getBody().getException());
    }

    @Test
    public void createStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/stepDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/steps", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, stepRepository.count());
    }

    @Test
    @Sql("/data/stepData.sql")
    public void updateStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/stepDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/steps/1500", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(76, stepRepository.findById((long)1500).get().getPedometerCount());
    }

    @Test
    @Sql("/data/stepData.sql")
    public void deleteStep_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/steps/1500", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, stepRepository.count());
    }

}
