package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.WeightTrackerDTO;
import uk.ac.brunel.group7.fitify.service.WeightTrackerService;


@RestController
@RequestMapping(value = "/api/activities/weight", produces = MediaType.APPLICATION_JSON_VALUE)
public class WeightTrackerController {

    private final WeightTrackerService weightTrackerService;

    public WeightTrackerController(final WeightTrackerService weightTrackerService) {
        this.weightTrackerService = weightTrackerService;
    }

    @GetMapping
    public List<WeightTrackerDTO> getAllWeightTrackers() {
        return weightTrackerService.findAll();
    }

    @GetMapping("/{activityWeightID}")
    public WeightTrackerDTO getWeightTracker(@PathVariable final Long activityWeightID) {
        return weightTrackerService.get(activityWeightID);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createWeightTracker(@RequestBody @Valid final WeightTrackerDTO weightTrackerDTO) {
        return weightTrackerService.create(weightTrackerDTO);
    }

    @PutMapping("/{activityWeightID}")
    public void updateWeightTracker(@PathVariable final Long activityWeightID, @RequestBody @Valid final WeightTrackerDTO weightTrackerDTO) {
        weightTrackerService.update(activityWeightID, weightTrackerDTO);
    }

    @DeleteMapping("/{activityWeightID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteWeightTracker(@PathVariable final Long activityWeightID) {
        weightTrackerService.delete(activityWeightID);
    }

}
