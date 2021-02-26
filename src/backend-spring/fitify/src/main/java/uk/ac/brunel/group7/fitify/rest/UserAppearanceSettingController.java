package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.UserAppearanceSettingDTO;
import uk.ac.brunel.group7.fitify.service.UserAppearanceSettingService;


@RestController
@RequestMapping(value = "/api/users/settings/appearance", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserAppearanceSettingController {

    private final UserAppearanceSettingService userAppearanceSettingService;

    public UserAppearanceSettingController(final UserAppearanceSettingService userAppearanceSettingService) {
        this.userAppearanceSettingService = userAppearanceSettingService;
    }

    @GetMapping
    public List<UserAppearanceSettingDTO> getAllUserAppearanceSettings() {
        return userAppearanceSettingService.findAll();
    }

    @GetMapping("/{id}")
    public UserAppearanceSettingDTO getUserAppearanceSetting(@PathVariable final Long id) {
        return userAppearanceSettingService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createUserAppearanceSetting(@RequestBody @Valid final UserAppearanceSettingDTO userAppearanceSettingDTO) {
        return userAppearanceSettingService.create(userAppearanceSettingDTO);
    }

    @PutMapping("/{id}")
    public void updateUserAppearanceSetting(@PathVariable final Long id, @RequestBody @Valid final UserAppearanceSettingDTO userAppearanceSettingDTO) {
        userAppearanceSettingService.update(id, userAppearanceSettingDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserAppearanceSetting(@PathVariable final Long id) {
        userAppearanceSettingService.delete(id);
    }

}
