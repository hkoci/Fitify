package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.UserHealthPlanDTO;
import uk.ac.brunel.group7.fitify.service.UserHealthPlanService;


@RestController
@RequestMapping(value = "/api/users/healthplan", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserHealthPlanController {

    private final UserHealthPlanService userHealthPlanService;

    public UserHealthPlanController(final UserHealthPlanService userHealthPlanService) {
        this.userHealthPlanService = userHealthPlanService;
    }

    @GetMapping
    public List<UserHealthPlanDTO> getAllUserHealthPlans() {
        return userHealthPlanService.findAll();
    }

    @GetMapping("/{id}")
    public UserHealthPlanDTO getUserHealthPlan(@PathVariable final Long id) {
        return userHealthPlanService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createUserHealthPlan(@RequestBody @Valid final UserHealthPlanDTO userHealthPlanDTO) {
        return userHealthPlanService.create(userHealthPlanDTO);
    }

    @PutMapping("/{id}")
    public void updateUserHealthPlan(@PathVariable final Long id, @RequestBody @Valid final UserHealthPlanDTO userHealthPlanDTO) {
        userHealthPlanService.update(id, userHealthPlanDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserHealthPlan(@PathVariable final Long id) {
        userHealthPlanService.delete(id);
    }

}
