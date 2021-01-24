package uk.ac.brunel.group7.healthapp.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.healthapp.domain.WeightTracker;
import uk.ac.brunel.group7.healthapp.model.WeightTrackerDTO;
import uk.ac.brunel.group7.healthapp.repos.WeightTrackerRepository;


@Service
public class WeightTrackerService {

    private final WeightTrackerRepository weightTrackerRepository;

    public WeightTrackerService(final WeightTrackerRepository weightTrackerRepository) {
        this.weightTrackerRepository = weightTrackerRepository;
    }

    public List<WeightTrackerDTO> findAll() {
        return weightTrackerRepository.findAll()
                .stream()
                .map(weightTracker -> mapToDTO(weightTracker, new WeightTrackerDTO()))
                .collect(Collectors.toList());
    }

    public WeightTrackerDTO get(final Long id) {
        return weightTrackerRepository.findById(id)
                .map(weightTracker -> mapToDTO(weightTracker, new WeightTrackerDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final WeightTrackerDTO weightTrackerDTO) {
        final WeightTracker weightTracker = new WeightTracker();
        mapToEntity(weightTrackerDTO, weightTracker);
        return weightTrackerRepository.save(weightTracker).getId();
    }

    public void update(final Long id, final WeightTrackerDTO weightTrackerDTO) {
        final WeightTracker weightTracker = weightTrackerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(weightTrackerDTO, weightTracker);
        weightTrackerRepository.save(weightTracker);
    }

    public void delete(final Long id) {
        weightTrackerRepository.deleteById(id);
    }

    private WeightTrackerDTO mapToDTO(final WeightTracker weightTracker, final WeightTrackerDTO weightTrackerDTO) {
        weightTrackerDTO.setId(weightTracker.getId());
        weightTrackerDTO.setWeight(weightTracker.getWeight());
        weightTrackerDTO.setDescription(weightTracker.getDescription());
        return weightTrackerDTO;
    }

    private WeightTracker mapToEntity(final WeightTrackerDTO weightTrackerDTO, final WeightTracker weightTracker) {
        weightTracker.setWeight(weightTrackerDTO.getWeight());
        weightTracker.setDescription(weightTrackerDTO.getDescription());
        return weightTracker;
    }

}
