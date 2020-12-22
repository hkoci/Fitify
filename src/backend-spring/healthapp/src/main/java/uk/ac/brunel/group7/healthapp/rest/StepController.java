package uk.ac.brunel.group7.healthapp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.healthapp.model.StepDTO;
import uk.ac.brunel.group7.healthapp.service.StepService;


@RestController
@RequestMapping(value = "/api/steps", produces = MediaType.APPLICATION_JSON_VALUE)
public class StepController {

    private final StepService stepService;

    @Autowired
    public StepController(final StepService stepService) {
        this.stepService = stepService;
    }

    @GetMapping
    public List<StepDTO> getAllSteps() {
        return stepService.findAll();
    }

    @GetMapping("/{id}")
    public StepDTO getStep(@PathVariable final Long id) {
        return stepService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createStep(@RequestBody @Valid final StepDTO stepDTO) {
        return stepService.create(stepDTO);
    }

    @PutMapping("/{id}")
    public void updateStep(@PathVariable final Long id, @RequestBody @Valid final StepDTO stepDTO) {
        stepService.update(id, stepDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStep(@PathVariable final Long id) {
        stepService.delete(id);
    }

}
