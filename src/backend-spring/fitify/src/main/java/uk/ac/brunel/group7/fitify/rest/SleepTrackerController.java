package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.SleepTrackerDTO;
import uk.ac.brunel.group7.fitify.service.SleepTrackerService;


@RestController
@RequestMapping(value = "/api/activities/sleep", produces = MediaType.APPLICATION_JSON_VALUE)
public class SleepTrackerController {

    private final SleepTrackerService sleepTrackerService;

    public SleepTrackerController(final SleepTrackerService sleepTrackerService) {
        this.sleepTrackerService = sleepTrackerService;
    }

    @GetMapping
    public List<SleepTrackerDTO> getAllSleepTrackers() {
        return sleepTrackerService.findAll();
    }

    @GetMapping("/{activitySleepID}")
    public SleepTrackerDTO getSleepTracker(@PathVariable final Long activitySleepID) {
        return sleepTrackerService.get(activitySleepID);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createSleepTracker(@RequestBody @Valid final SleepTrackerDTO sleepTrackerDTO) {
        return sleepTrackerService.create(sleepTrackerDTO);
    }

    @PutMapping("/{activitySleepID}")
    public void updateSleepTracker(@PathVariable final Long activitySleepID, @RequestBody @Valid final SleepTrackerDTO sleepTrackerDTO) {
        sleepTrackerService.update(activitySleepID, sleepTrackerDTO);
    }

    @DeleteMapping("/{activitySleepID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSleepTracker(@PathVariable final Long activitySleepID) {
        sleepTrackerService.delete(activitySleepID);
    }

}
