package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.Activity;
import uk.ac.brunel.group7.fitify.model.ActivityDTO;
import uk.ac.brunel.group7.fitify.repos.ActivityRepository;


@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    public ActivityService(final ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<ActivityDTO> findAll() {
        return activityRepository.findAll()
                .stream()
                .map(activity -> mapToDTO(activity, new ActivityDTO()))
                .collect(Collectors.toList());
    }

    public ActivityDTO get(final Long activityID) {
        return activityRepository.findById(activityID)
                .map(activity -> mapToDTO(activity, new ActivityDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    
    public ActivityDTO getUserID(final Long userID) {
        return activityRepository.findByUserID(userID)
            .map(activity -> mapToDTO(activity, new ActivityDTO()))
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final ActivityDTO activityDTO) {
        final Activity activity = new Activity();
        mapToEntity(activityDTO, activity);
        return activityRepository.save(activity).getActivityID();
    }

    public void update(final Long activityID, final ActivityDTO activityDTO) {
        final Activity activity = activityRepository.findById(activityID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(activityDTO, activity);
        activityRepository.save(activity);
    }

    public void delete(final Long activityID) {
        activityRepository.deleteById(activityID);
    }

    private ActivityDTO mapToDTO(final Activity activity, final ActivityDTO activityDTO) {
        activityDTO.setActivityID(activity.getActivityID());
        activityDTO.setUserID(activity.getUserID());
        activityDTO.setActivityStart(activity.getActivityStart());
        activityDTO.setActivityEnd(activity.getActivityEnd());
        activityDTO.setActivityType(activity.getActivityType());
        activityDTO.setMoodRating(activity.getMoodRating());
        activityDTO.setCaloriesBurnt(activity.getCaloriesBurnt());
        return activityDTO;
    }

    private Activity mapToEntity(final ActivityDTO activityDTO, final Activity activity) {
        activity.setUserID(activityDTO.getUserID());
        activity.setActivityStart(activityDTO.getActivityStart());
        activity.setActivityEnd(activityDTO.getActivityEnd());
        activity.setActivityType(activityDTO.getActivityType());
        activity.setMoodRating(activityDTO.getMoodRating());
        activity.setCaloriesBurnt(activityDTO.getCaloriesBurnt());
        return activity;
    }

}
