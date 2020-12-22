package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.PhysicalMovementDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class PhysicalMovementControllerIT extends BaseIT {

    @Test
    @Sql("/data/physicalMovementData.sql")
    public void getAllPhysicalMovements_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<List<PhysicalMovementDTO>> response = restTemplate.exchange(
                "/api/physicalMovements", HttpMethod.GET, request, new ParameterizedTypeReference<>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1300, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/physicalMovementData.sql")
    public void getPhysicalMovement_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<PhysicalMovementDTO> response = restTemplate.exchange(
                "/api/physicalMovements/1300", HttpMethod.GET, request, PhysicalMovementDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", response.getBody().getMovementLocationDetails());
    }

    @Test
    public void getPhysicalMovement_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/physicalMovements/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("CustomNotFoundException", response.getBody().getException());
    }

    @Test
    public void createPhysicalMovement_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/physicalMovementDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/physicalMovements", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, physicalMovementRepository.count());
    }

    @Test
    public void createPhysicalMovement_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/physicalMovementDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/physicalMovements", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("movementLocationDetails", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/physicalMovementData.sql")
    public void updatePhysicalMovement_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/physicalMovementDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/physicalMovements/1300", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", physicalMovementRepository.findById((long)1300).get().getMovementLocationDetails());
    }

    @Test
    @Sql("/data/physicalMovementData.sql")
    public void deletePhysicalMovement_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, new HttpHeaders());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/physicalMovements/1300", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, physicalMovementRepository.count());
    }

}
