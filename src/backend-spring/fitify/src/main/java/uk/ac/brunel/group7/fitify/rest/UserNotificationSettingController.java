package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.UserNotificationSettingDTO;
import uk.ac.brunel.group7.fitify.service.UserNotificationSettingService;


@RestController
@RequestMapping(value = "/api/users/settings/notification", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserNotificationSettingController {

    private final UserNotificationSettingService userNotificationSettingService;

    public UserNotificationSettingController(final UserNotificationSettingService userNotificationSettingService) {
        this.userNotificationSettingService = userNotificationSettingService;
    }

    @GetMapping
    public List<UserNotificationSettingDTO> getAllUserNotificationSettings() {
        return userNotificationSettingService.findAll();
    }

    @GetMapping("/{id}")
    public UserNotificationSettingDTO getUserNotificationSetting(@PathVariable final Long id) {
        return userNotificationSettingService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createUserNotificationSetting(@RequestBody @Valid final UserNotificationSettingDTO userNotificationSettingDTO) {
        return userNotificationSettingService.create(userNotificationSettingDTO);
    }

    @PutMapping("/{id}")
    public void updateUserNotificationSetting(@PathVariable final Long id, @RequestBody @Valid final UserNotificationSettingDTO userNotificationSettingDTO) {
        userNotificationSettingService.update(id, userNotificationSettingDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserNotificationSetting(@PathVariable final Long id) {
        userNotificationSettingService.delete(id);
    }

}
