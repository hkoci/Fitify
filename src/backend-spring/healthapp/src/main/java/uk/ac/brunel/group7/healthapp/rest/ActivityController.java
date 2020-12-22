package uk.ac.brunel.group7.healthapp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.healthapp.model.ActivityDTO;
import uk.ac.brunel.group7.healthapp.service.ActivityService;


@RestController
@RequestMapping(value = "/api/activitys", produces = MediaType.APPLICATION_JSON_VALUE)
public class ActivityController {

    private final ActivityService activityService;

    @Autowired
    public ActivityController(final ActivityService activityService) {
        this.activityService = activityService;
    }

    @GetMapping
    public List<ActivityDTO> getAllActivitys() {
        return activityService.findAll();
    }

    @GetMapping("/{id}")
    public ActivityDTO getActivity(@PathVariable final Long id) {
        return activityService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createActivity(@RequestBody @Valid final ActivityDTO activityDTO) {
        return activityService.create(activityDTO);
    }

    @PutMapping("/{id}")
    public void updateActivity(@PathVariable final Long id, @RequestBody @Valid final ActivityDTO activityDTO) {
        activityService.update(id, activityDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteActivity(@PathVariable final Long id) {
        activityService.delete(id);
    }

}
