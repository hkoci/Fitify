package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.UserFriendDTO;
import uk.ac.brunel.group7.fitify.service.UserFriendService;


@RestController
@RequestMapping(value = "/api/users/friend", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserFriendController {

    private final UserFriendService userFriendService;

    public UserFriendController(final UserFriendService userFriendService) {
        this.userFriendService = userFriendService;
    }

    @GetMapping
    public List<UserFriendDTO> getAllUserFriends() {
        return userFriendService.findAll();
    }

    @GetMapping("/{userFriendid}")
    public UserFriendDTO getUserFriend(@PathVariable final Long userFriendid) {
        return userFriendService.get(userFriendid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createUserFriend(@RequestBody @Valid final UserFriendDTO userFriendDTO) {
        return userFriendService.create(userFriendDTO);
    }

    @PutMapping("/{userFriendid}")
    public void updateUserFriend(@PathVariable final Long userFriendid, @RequestBody @Valid final UserFriendDTO userFriendDTO) {
        userFriendService.update(userFriendid, userFriendDTO);
    }

    @DeleteMapping("/{userFriendid}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserFriend(@PathVariable final Long userFriendid) {
        userFriendService.delete(userFriendid);
    }

}
