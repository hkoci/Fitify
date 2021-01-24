package uk.ac.brunel.group7.healthapp.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.healthapp.model.UserFriendDTO;
import uk.ac.brunel.group7.healthapp.service.UserFriendService;


@RestController
@RequestMapping(value = "/api/userFriends", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserFriendController {

    private final UserFriendService userFriendService;

    public UserFriendController(final UserFriendService userFriendService) {
        this.userFriendService = userFriendService;
    }

    @GetMapping
    public List<UserFriendDTO> getAllUserFriends() {
        return userFriendService.findAll();
    }

    @GetMapping("/{id}")
    public UserFriendDTO getUserFriend(@PathVariable final Long id) {
        return userFriendService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createUserFriend(@RequestBody @Valid final UserFriendDTO userFriendDTO) {
        return userFriendService.create(userFriendDTO);
    }

    @PutMapping("/{id}")
    public void updateUserFriend(@PathVariable final Long id, @RequestBody @Valid final UserFriendDTO userFriendDTO) {
        userFriendService.update(id, userFriendDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserFriend(@PathVariable final Long id) {
        userFriendService.delete(id);
    }

}
