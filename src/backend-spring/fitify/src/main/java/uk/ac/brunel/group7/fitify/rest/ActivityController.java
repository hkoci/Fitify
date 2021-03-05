package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.ActivityDTO;
import uk.ac.brunel.group7.fitify.model.UserDTO;
import uk.ac.brunel.group7.fitify.service.ActivityService;


@RestController
@RequestMapping(value = "/api/activities", produces = MediaType.APPLICATION_JSON_VALUE)
public class ActivityController {

    private final ActivityService activityService;

    public ActivityController(final ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping
    public List<ActivityDTO> getAllActivitys() {
        return activityService.findAll();
    }

    @GetMapping("/{activityID}")
    public ActivityDTO getActivity(@PathVariable final Long activityID) {
        return activityService.get(activityID);
    }
    
    //UserID CRUD (GET)
    @GetMapping("/user/{userID}")
    public ActivityDTO getUsername(@PathVariable final Long userID) {
        return activityService.getUserID(userID);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createActivity(@RequestBody @Valid final ActivityDTO activityDTO) {
        return activityService.create(activityDTO);
    }

    @PutMapping("/{activityID}")
    public void updateActivity(@PathVariable final Long activityID, @RequestBody @Valid final ActivityDTO activityDTO) {
        activityService.update(activityID, activityDTO);
    }

    @DeleteMapping("/{activityID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteActivity(@PathVariable final Long activityID) {
        activityService.delete(activityID);
    }

}
