package uk.ac.brunel.group7.healthapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import uk.ac.brunel.group7.healthapp.config.CustomNotFoundException;
import uk.ac.brunel.group7.healthapp.domain.Step;
import uk.ac.brunel.group7.healthapp.model.StepDTO;
import uk.ac.brunel.group7.healthapp.repos.StepRepository;


@Service
public class StepService {

    private final StepRepository stepRepository;

    @Autowired
    public StepService(final StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    public List<StepDTO> findAll() {
        return stepRepository.findAll()
                .stream()
                .map(step -> mapToDTO(step, new StepDTO()))
                .collect(Collectors.toList());
    }

    public StepDTO get(final Long id) {
        return stepRepository.findById(id)
                .map(step -> mapToDTO(step, new StepDTO()))
                .orElseThrow(CustomNotFoundException::new);
    }

    public Long create(final StepDTO stepDTO) {
        final Step step = new Step();
        mapToEntity(stepDTO, step);
        return stepRepository.save(step).getId();
    }

    public void update(final Long id, final StepDTO stepDTO) {
        final Step step = stepRepository.findById(id)
                .orElseThrow(CustomNotFoundException::new);
        mapToEntity(stepDTO, step);
        stepRepository.save(step);
    }

    public void delete(final Long id) {
        stepRepository.deleteById(id);
    }

    private StepDTO mapToDTO(final Step step, final StepDTO stepDTO) {
        stepDTO.setId(step.getId());
        stepDTO.setStepsRecorded(step.getStepsRecorded());
        stepDTO.setPedometerCount(step.getPedometerCount());
        return stepDTO;
    }

    private Step mapToEntity(final StepDTO stepDTO, final Step step) {
        step.setStepsRecorded(stepDTO.getStepsRecorded());
        step.setPedometerCount(stepDTO.getPedometerCount());
        return step;
    }

}
