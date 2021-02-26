package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.UserMarketingSettingDTO;
import uk.ac.brunel.group7.fitify.service.UserMarketingSettingService;


@RestController
@RequestMapping(value = "/api/users/settings/marketing", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserMarketingSettingController {

    private final UserMarketingSettingService userMarketingSettingService;

    public UserMarketingSettingController(final UserMarketingSettingService userMarketingSettingService) {
        this.userMarketingSettingService = userMarketingSettingService;
    }

    @GetMapping
    public List<UserMarketingSettingDTO> getAllUserMarketingSettings() {
        return userMarketingSettingService.findAll();
    }

    @GetMapping("/{id}")
    public UserMarketingSettingDTO getUserMarketingSetting(@PathVariable final Long id) {
        return userMarketingSettingService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createUserMarketingSetting(@RequestBody @Valid final UserMarketingSettingDTO userMarketingSettingDTO) {
        return userMarketingSettingService.create(userMarketingSettingDTO);
    }

    @PutMapping("/{id}")
    public void updateUserMarketingSetting(@PathVariable final Long id, @RequestBody @Valid final UserMarketingSettingDTO userMarketingSettingDTO) {
        userMarketingSettingService.update(id, userMarketingSettingDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserMarketingSetting(@PathVariable final Long id) {
        userMarketingSettingService.delete(id);
    }

}
