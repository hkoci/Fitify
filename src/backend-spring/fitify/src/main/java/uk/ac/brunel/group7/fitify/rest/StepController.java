package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.StepDTO;
import uk.ac.brunel.group7.fitify.service.StepService;


@RestController
@RequestMapping(value = "/api/activities/step", produces = MediaType.APPLICATION_JSON_VALUE)
public class StepController {

    private final StepService stepService;

    public StepController(final StepService stepService) {
        this.stepService = stepService;
    }

    @GetMapping
    public List<StepDTO> getAllSteps() {
        return stepService.findAll();
    }

    @GetMapping("/{activityStepID}")
    public StepDTO getStep(@PathVariable final Long activityStepID) {
        return stepService.get(activityStepID);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createStep(@RequestBody @Valid final StepDTO stepDTO) {
        return stepService.create(stepDTO);
    }

    @PutMapping("/{activityStepID}")
    public void updateStep(@PathVariable final Long activityStepID, @RequestBody @Valid final StepDTO stepDTO) {
        stepService.update(activityStepID, stepDTO);
    }

    @DeleteMapping("/{activityStepID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStep(@PathVariable final Long activityStepID) {
        stepService.delete(activityStepID);
    }

}
