package uk.ac.brunel.group7.fitify.rest;

import uk.ac.brunel.group7.fitify.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.fitify.config.RestExceptionHandler;
import uk.ac.brunel.group7.fitify.model.UserNotificationSettingDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserNotificationSettingControllerIT extends BaseIT {

    @Test
    @Sql("/data/userNotificationSettingData.sql")
    public void getAllUserNotificationSettings_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<UserNotificationSettingDTO>> response = restTemplate.exchange(
                "/api/users/settings/notification", HttpMethod.GET, request, new ParameterizedTypeReference<List<UserNotificationSettingDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1900, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/userNotificationSettingData.sql")
    public void getUserNotificationSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<UserNotificationSettingDTO> response = restTemplate.exchange(
                "/api/users/settings/notification/1900", HttpMethod.GET, request, UserNotificationSettingDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(false, response.getBody().getDailyNotificationProgress());
    }

    @Test
    public void getUserNotificationSetting_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/settings/notification/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createUserNotificationSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userNotificationSettingDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/users/settings/notification", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, userNotificationSettingRepository.count());
    }

    @Test
    public void createUserNotificationSetting_missingField() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userNotificationSettingDTORequest_missingField.json"), headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/users/settings/notification", HttpMethod.POST, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("MethodArgumentNotValidException", response.getBody().getException());
        assertEquals("dailyNotificationProgress", response.getBody().getFieldErrors().get(0).getField());
    }

    @Test
    @Sql("/data/userNotificationSettingData.sql")
    public void updateUserNotificationSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userNotificationSettingDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/settings/notification/1900", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(true, userNotificationSettingRepository.findById((long)1900).get().getDailyNotificationProgress());
    }

    @Test
    @Sql("/data/userNotificationSettingData.sql")
    public void deleteUserNotificationSetting_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/users/settings/notification/1900", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userNotificationSettingRepository.count());
    }

}
