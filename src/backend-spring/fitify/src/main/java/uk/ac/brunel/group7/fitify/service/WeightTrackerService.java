package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.WeightTracker;
import uk.ac.brunel.group7.fitify.model.WeightTrackerDTO;
import uk.ac.brunel.group7.fitify.repos.WeightTrackerRepository;


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

    public WeightTrackerDTO get(final Long activityWeightID) {
        return weightTrackerRepository.findById(activityWeightID)
                .map(weightTracker -> mapToDTO(weightTracker, new WeightTrackerDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final WeightTrackerDTO weightTrackerDTO) {
        final WeightTracker weightTracker = new WeightTracker();
        mapToEntity(weightTrackerDTO, weightTracker);
        return weightTrackerRepository.save(weightTracker).getActivityWeightID();
    }

    public void update(final Long activityWeightID, final WeightTrackerDTO weightTrackerDTO) {
        final WeightTracker weightTracker = weightTrackerRepository.findById(activityWeightID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(weightTrackerDTO, weightTracker);
        weightTrackerRepository.save(weightTracker);
    }

    public void delete(final Long activityWeightID) {
        weightTrackerRepository.deleteById(activityWeightID);
    }

    private WeightTrackerDTO mapToDTO(final WeightTracker weightTracker, final WeightTrackerDTO weightTrackerDTO) {
        weightTrackerDTO.setActivityWeightID(weightTracker.getActivityWeightID());
        weightTrackerDTO.setActivityID(weightTracker.getActivityID());
        weightTrackerDTO.setWeight(weightTracker.getWeight());
        weightTrackerDTO.setDescription(weightTracker.getDescription());
        return weightTrackerDTO;
    }

    private WeightTracker mapToEntity(final WeightTrackerDTO weightTrackerDTO, final WeightTracker weightTracker) {
        weightTracker.setActivityID(weightTrackerDTO.getActivityID());
        weightTracker.setWeight(weightTrackerDTO.getWeight());
        weightTracker.setDescription(weightTrackerDTO.getDescription());
        return weightTracker;
    }

}
