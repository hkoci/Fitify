package uk.ac.brunel.group7.healthapp.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.healthapp.model.WeightTrackerDTO;
import uk.ac.brunel.group7.healthapp.service.WeightTrackerService;


@RestController
@RequestMapping(value = "/api/weightTrackers", produces = MediaType.APPLICATION_JSON_VALUE)
public class WeightTrackerController {

    private final WeightTrackerService weightTrackerService;

    public WeightTrackerController(final WeightTrackerService weightTrackerService) {
        this.weightTrackerService = weightTrackerService;
    }

    @GetMapping
    public List<WeightTrackerDTO> getAllWeightTrackers() {
        return weightTrackerService.findAll();
    }

    @GetMapping("/{id}")
    public WeightTrackerDTO getWeightTracker(@PathVariable final Long id) {
        return weightTrackerService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createWeightTracker(@RequestBody @Valid final WeightTrackerDTO weightTrackerDTO) {
        return weightTrackerService.create(weightTrackerDTO);
    }

    @PutMapping("/{id}")
    public void updateWeightTracker(@PathVariable final Long id, @RequestBody @Valid final WeightTrackerDTO weightTrackerDTO) {
        weightTrackerService.update(id, weightTrackerDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteWeightTracker(@PathVariable final Long id) {
        weightTrackerService.delete(id);
    }

}
