package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.Step;
import uk.ac.brunel.group7.fitify.model.StepDTO;
import uk.ac.brunel.group7.fitify.repos.StepRepository;


@Service
public class StepService {

    private final StepRepository stepRepository;

    public StepService(final StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    public List<StepDTO> findAll() {
        return stepRepository.findAll()
                .stream()
                .map(step -> mapToDTO(step, new StepDTO()))
                .collect(Collectors.toList());
    }

    public StepDTO get(final Long activityStepID) {
        return stepRepository.findById(activityStepID)
                .map(step -> mapToDTO(step, new StepDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final StepDTO stepDTO) {
        final Step step = new Step();
        mapToEntity(stepDTO, step);
        return stepRepository.save(step).getActivityStepID();
    }

    public void update(final Long activityStepID, final StepDTO stepDTO) {
        final Step step = stepRepository.findById(activityStepID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(stepDTO, step);
        stepRepository.save(step);
    }

    public void delete(final Long activityStepID) {
        stepRepository.deleteById(activityStepID);
    }

    private StepDTO mapToDTO(final Step step, final StepDTO stepDTO) {
        stepDTO.setActivityStepID(step.getActivityStepID());
        stepDTO.setActivityID(step.getActivityID());
        stepDTO.setStepsRecorded(step.getStepsRecorded());
        stepDTO.setPedometerCount(step.getPedometerCount());
        return stepDTO;
    }

    private Step mapToEntity(final StepDTO stepDTO, final Step step) {
        step.setActivityID(stepDTO.getActivityID());
        step.setStepsRecorded(stepDTO.getStepsRecorded());
        step.setPedometerCount(stepDTO.getPedometerCount());
        return step;
    }

}
