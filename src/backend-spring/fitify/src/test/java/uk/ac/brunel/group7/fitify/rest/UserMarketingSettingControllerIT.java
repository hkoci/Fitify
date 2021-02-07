package uk.ac.brunel.group7.fitify.rest;

import uk.ac.brunel.group7.fitify.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.fitify.config.RestExceptionHandler;
import uk.ac.brunel.group7.fitify.model.UserMarketingSettingDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserMarketingSettingControllerIT extends BaseIT {

    @Test
    @Sql("/data/userMarketingSettingData.sql")
    public void getAllUserMarketingSettings_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<UserMarketingSettingDTO>> response = restTemplate.exchange(
                "/api/users/settings/marketing", HttpMethod.GET, request, new ParameterizedTypeReference<List<UserMarketingSettingDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)2000, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/userMarketingSettingData.sql")
    public void getUserMarketingSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<UserMarketingSettingDTO> response = restTemplate.exchange(
                "/api/users/settings/marketing/2000", HttpMethod.GET, request, UserMarketingSettingDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(false, response.getBody().getMarketingEmailPreference());
    }

    @Test
    public void getUserMarketingSetting_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/settings/marketing/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createUserMarketingSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userMarketingSettingDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/users/settings/marketing", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, userMarketingSettingRepository.count());
    }

    @Test
    public void createUserMarketingSetting_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userMarketingSettingDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/settings/marketing", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("marketingEmailPreference", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/userMarketingSettingData.sql")
    public void updateUserMarketingSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userMarketingSettingDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/settings/marketing/2000", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(true, userMarketingSettingRepository.findById((long)2000).get().getMarketingEmailPreference());
    }

    @Test
    @Sql("/data/userMarketingSettingData.sql")
    public void deleteUserMarketingSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/settings/marketing/2000", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userMarketingSettingRepository.count());
    }

}
