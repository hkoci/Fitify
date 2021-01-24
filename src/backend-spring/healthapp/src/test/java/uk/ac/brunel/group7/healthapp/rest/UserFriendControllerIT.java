package uk.ac.brunel.group7.healthapp.rest;

import uk.ac.brunel.group7.healthapp.config.BaseIT;
import org.junit.jupiter.api.Test;
import org.springframework.http.*;
import java.util.List;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.test.context.jdbc.Sql;
import uk.ac.brunel.group7.healthapp.config.RestExceptionHandler;
import uk.ac.brunel.group7.healthapp.model.UserFriendDTO;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class UserFriendControllerIT extends BaseIT {

    @Test
    @Sql("/data/userFriendData.sql")
    public void getAllUserFriends_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<List<UserFriendDTO>> response = restTemplate.exchange(
                "/api/userFriends", HttpMethod.GET, request, new ParameterizedTypeReference<List<UserFriendDTO>>() {});

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)1600, response.getBody().get(0).getId());
    }

    @Test
    @Sql("/data/userFriendData.sql")
    public void getUserFriend_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<UserFriendDTO> response = restTemplate.exchange(
                "/api/userFriends/1600", HttpMethod.GET, request, UserFriendDTO.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)97, response.getBody().getFriendIds());
    }

    @Test
    public void getUserFriend_notFound() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<RestExceptionHandler.ErrorResponse> response = restTemplate.exchange(
                "/api/userFriends/85", HttpMethod.GET, request, RestExceptionHandler.ErrorResponse.class);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ResponseStatusException", response.getBody().getException());
    }

    @Test
    public void createUserFriend_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userFriendDTORequest.json"), headers());
        final ResponseEntity<Long> response = restTemplate.exchange(
                "/api/userFriends", HttpMethod.POST, request, Long.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1, userFriendRepository.count());
    }

    @Test
    @Sql("/data/userFriendData.sql")
    public void updateUserFriend_success() {
        final HttpEntity<String> request = new HttpEntity<>(readResource("/requests/userFriendDTORequest.json"), headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/userFriends/1600", HttpMethod.PUT, request, Void.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals((long)96, userFriendRepository.findById((long)1600).get().getFriendIds());
    }

    @Test
    @Sql("/data/userFriendData.sql")
    public void deleteUserFriend_success() {
        final HttpEntity<String> request = new HttpEntity<>(null, headers());
        final ResponseEntity<Void> response = restTemplate.exchange(
                "/api/userFriends/1600", HttpMethod.DELETE, request, Void.class);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertEquals(0, userFriendRepository.count());
    }

}
