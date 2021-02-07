package uk.ac.brunel.group7.fitify.rest;

import uk.ac.brunel.group7.fitify.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.fitify.config.RestExceptionHandler;
import uk.ac.brunel.group7.fitify.model.UserAppearanceSettingDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserAppearanceSettingControllerIT extends BaseIT {

    @Test
    @Sql("/data/userAppearanceSettingData.sql")
    public void getAllUserAppearanceSettings_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<UserAppearanceSettingDTO>> response = restTemplate.exchange(
                "/api/users/settings/appearance", HttpMethod.GET, request, new ParameterizedTypeReference<List<UserAppearanceSettingDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1800, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/userAppearanceSettingData.sql")
    public void getUserAppearanceSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<UserAppearanceSettingDTO> response = restTemplate.exchange(
                "/api/users/settings/appearance/1800", HttpMethod.GET, request, UserAppearanceSettingDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Cras se", response.getBody().getPrimaryHexColour());
    }

    @Test
    public void getUserAppearanceSetting_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/settings/appearance/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createUserAppearanceSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userAppearanceSettingDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/users/settings/appearance", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, userAppearanceSettingRepository.count());
    }

    @Test
    public void createUserAppearanceSetting_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userAppearanceSettingDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/settings/appearance", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("primaryHexColour", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/userAppearanceSettingData.sql")
    public void updateUserAppearanceSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userAppearanceSettingDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/settings/appearance/1800", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Donec a", userAppearanceSettingRepository.findById((long)1800).get().getPrimaryHexColour());
    }

    @Test
    @Sql("/data/userAppearanceSettingData.sql")
    public void deleteUserAppearanceSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/settings/appearance/1800", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userAppearanceSettingRepository.count());
    }

}
