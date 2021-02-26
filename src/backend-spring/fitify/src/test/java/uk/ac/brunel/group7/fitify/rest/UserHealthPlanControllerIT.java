package uk.ac.brunel.group7.fitify.rest;

import uk.ac.brunel.group7.fitify.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.fitify.config.RestExceptionHandler;
import uk.ac.brunel.group7.fitify.model.UserHealthPlanDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserHealthPlanControllerIT extends BaseIT {

    @Test
    @Sql("/data/userHealthPlanData.sql")
    public void getAllUserHealthPlans_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<UserHealthPlanDTO>> response = restTemplate.exchange(
                "/api/users/healthplan", HttpMethod.GET, request, new ParameterizedTypeReference<List<UserHealthPlanDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)2100, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/userHealthPlanData.sql")
    public void getUserHealthPlan_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<UserHealthPlanDTO> response = restTemplate.exchange(
                "/api/users/healthplan/2100", HttpMethod.GET, request, UserHealthPlanDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(29, response.getBody().getFitPoints());
    }

    @Test
    public void getUserHealthPlan_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/healthplan/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createUserHealthPlan_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userHealthPlanDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/users/healthplan", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, userHealthPlanRepository.count());
    }

    @Test
    @Sql("/data/userHealthPlanData.sql")
    public void updateUserHealthPlan_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userHealthPlanDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/healthplan/2100", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(30, userHealthPlanRepository.findById((long)2100).get().getFitPoints());
    }

    @Test
    @Sql("/data/userHealthPlanData.sql")
    public void deleteUserHealthPlan_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/healthplan/2100", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userHealthPlanRepository.count());
    }

}
