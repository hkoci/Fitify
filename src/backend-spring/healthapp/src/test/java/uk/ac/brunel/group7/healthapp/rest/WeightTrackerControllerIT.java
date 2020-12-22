package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.WeightTrackerDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class WeightTrackerControllerIT extends BaseIT {

    @Test
    @Sql("/data/weightTrackerData.sql")
    public void getAllWeightTrackers_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<List<WeightTrackerDTO>> response = restTemplate.exchange(
                "/api/weightTrackers", HttpMethod.GET, request, new ParameterizedTypeReference<>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1200, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/weightTrackerData.sql")
    public void getWeightTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<WeightTrackerDTO> response = restTemplate.exchange(
                "/api/weightTrackers/1200", HttpMethod.GET, request, WeightTrackerDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(28.42d, response.getBody().getWeight());
    }

    @Test
    public void getWeightTracker_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/weightTrackers/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("CustomNotFoundException", response.getBody().getException());
    }

    @Test
    public void createWeightTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/weightTrackerDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/weightTrackers", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, weightTrackerRepository.count());
    }

    @Test
    public void createWeightTracker_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/weightTrackerDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/weightTrackers", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("weight", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/weightTrackerData.sql")
    public void updateWeightTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/weightTrackerDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/weightTrackers/1200", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(28.42d, weightTrackerRepository.findById((long)1200).get().getWeight());
    }

    @Test
    @Sql("/data/weightTrackerData.sql")
    public void deleteWeightTracker_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/weightTrackers/1200", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, weightTrackerRepository.count());
    }

}
