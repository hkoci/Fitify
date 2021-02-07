package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.SleepTracker;
import uk.ac.brunel.group7.fitify.model.SleepTrackerDTO;
import uk.ac.brunel.group7.fitify.repos.SleepTrackerRepository;


@Service
public class SleepTrackerService {

    private final SleepTrackerRepository sleepTrackerRepository;

    public SleepTrackerService(final SleepTrackerRepository sleepTrackerRepository) {
        this.sleepTrackerRepository = sleepTrackerRepository;
    }

    public List<SleepTrackerDTO> findAll() {
        return sleepTrackerRepository.findAll()
                .stream()
                .map(sleepTracker -> mapToDTO(sleepTracker, new SleepTrackerDTO()))
                .collect(Collectors.toList());
    }

    public SleepTrackerDTO get(final Long activitySleepID) {
        return sleepTrackerRepository.findById(activitySleepID)
                .map(sleepTracker -> mapToDTO(sleepTracker, new SleepTrackerDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final SleepTrackerDTO sleepTrackerDTO) {
        final SleepTracker sleepTracker = new SleepTracker();
        mapToEntity(sleepTrackerDTO, sleepTracker);
        return sleepTrackerRepository.save(sleepTracker).getActivitySleepID();
    }

    public void update(final Long activitySleepID, final SleepTrackerDTO sleepTrackerDTO) {
        final SleepTracker sleepTracker = sleepTrackerRepository.findById(activitySleepID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(sleepTrackerDTO, sleepTracker);
        sleepTrackerRepository.save(sleepTracker);
    }

    public void delete(final Long activitySleepID) {
        sleepTrackerRepository.deleteById(activitySleepID);
    }

    private SleepTrackerDTO mapToDTO(final SleepTracker sleepTracker, final SleepTrackerDTO sleepTrackerDTO) {
        sleepTrackerDTO.setActivitySleepID(sleepTracker.getActivitySleepID());
        sleepTrackerDTO.setActivityID(sleepTracker.getActivityID());
        sleepTrackerDTO.setSleepDate(sleepTracker.getSleepDate());
        sleepTrackerDTO.setSleepTime(sleepTracker.getSleepTime());
        sleepTrackerDTO.setAwakeTime(sleepTracker.getAwakeTime());
        sleepTrackerDTO.setSleepingHrs(sleepTracker.getSleepingHrs());
        return sleepTrackerDTO;
    }

    private SleepTracker mapToEntity(final SleepTrackerDTO sleepTrackerDTO, final SleepTracker sleepTracker) {
        sleepTracker.setActivityID(sleepTrackerDTO.getActivityID());
        sleepTracker.setSleepDate(sleepTrackerDTO.getSleepDate());
        sleepTracker.setSleepTime(sleepTrackerDTO.getSleepTime());
        sleepTracker.setAwakeTime(sleepTrackerDTO.getAwakeTime());
        sleepTracker.setSleepingHrs(sleepTrackerDTO.getSleepingHrs());
        return sleepTracker;
    }

}
