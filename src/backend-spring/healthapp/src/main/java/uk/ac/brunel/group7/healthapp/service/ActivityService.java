package uk.ac.brunel.group7.healthapp.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.healthapp.domain.Activity;
import uk.ac.brunel.group7.healthapp.domain.PhysicalMovement;
import uk.ac.brunel.group7.healthapp.domain.Step;
import uk.ac.brunel.group7.healthapp.domain.User;
import uk.ac.brunel.group7.healthapp.domain.WeightTracker;
import uk.ac.brunel.group7.healthapp.model.ActivityDTO;
import uk.ac.brunel.group7.healthapp.repos.ActivityRepository;
import uk.ac.brunel.group7.healthapp.repos.PhysicalMovementRepository;
import uk.ac.brunel.group7.healthapp.repos.StepRepository;
import uk.ac.brunel.group7.healthapp.repos.UserRepository;
import uk.ac.brunel.group7.healthapp.repos.WeightTrackerRepository;


@Service
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final UserRepository userRepository;
    private final WeightTrackerRepository weightTrackerRepository;
    private final PhysicalMovementRepository physicalMovementRepository;
    private final StepRepository stepRepository;

    public ActivityService(final ActivityRepository activityRepository,
                           final UserRepository userRepository,
                           final WeightTrackerRepository weightTrackerRepository,
                           final PhysicalMovementRepository physicalMovementRepository,
                           final StepRepository stepRepository) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
        this.weightTrackerRepository = weightTrackerRepository;
        this.physicalMovementRepository = physicalMovementRepository;
        this.stepRepository = stepRepository;
    }

    public List<ActivityDTO> findAll() {
        return activityRepository.findAll()
                .stream()
                .map(activity -> mapToDTO(activity, new ActivityDTO()))
                .collect(Collectors.toList());
    }

    public ActivityDTO get(final Long id) {
        return activityRepository.findById(id)
                .map(activity -> mapToDTO(activity, new ActivityDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final ActivityDTO activityDTO) {
        final Activity activity = new Activity();
        mapToEntity(activityDTO, activity);
        return activityRepository.save(activity).getId();
    }

    public void update(final Long id, final ActivityDTO activityDTO) {
        final Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(activityDTO, activity);
        activityRepository.save(activity);
    }

    public void delete(final Long id) {
        activityRepository.deleteById(id);
    }

    private ActivityDTO mapToDTO(final Activity activity, final ActivityDTO activityDTO) {
        activityDTO.setId(activity.getId());
        activityDTO.setActivityUserId(activity.getActivityUserId());
        activityDTO.setActivityStart(activity.getActivityStart());
        activityDTO.setActivityEnd(activity.getActivityEnd());
        activityDTO.setActivityType(activity.getActivityType());
        activityDTO.setMoodRating(activity.getMoodRating());
        activityDTO.setUserActivities(activity.getUserActivities() == null ? null : activity.getUserActivities().getId());
        activityDTO.setWeightTracker(activity.getWeightTracker() == null ? null : activity.getWeightTracker().getId());
        activityDTO.setPhysical(activity.getPhysical() == null ? null : activity.getPhysical().getId());
        activityDTO.setSteps(activity.getSteps() == null ? null : activity.getSteps().getId());
        return activityDTO;
    }

    private Activity mapToEntity(final ActivityDTO activityDTO, final Activity activity) {
        activity.setActivityUserId(activityDTO.getActivityUserId());
        activity.setActivityStart(activityDTO.getActivityStart());
        activity.setActivityEnd(activityDTO.getActivityEnd());
        activity.setActivityType(activityDTO.getActivityType());
        activity.setMoodRating(activityDTO.getMoodRating());
        if (activityDTO.getUserActivities() != null &&
                (activity.getUserActivities() == null || !activity.getUserActivities().getId().equals(activityDTO.getUserActivities()))) {
            final User userActivities = userRepository.findById(activityDTO.getUserActivities())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
            activity.setUserActivities(userActivities);
        }
        if (activityDTO.getWeightTracker() != null &&
                (activity.getWeightTracker() == null || !activity.getWeightTracker().getId().equals(activityDTO.getWeightTracker()))) {
            final WeightTracker weightTracker = weightTrackerRepository.findById(activityDTO.getWeightTracker())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
            activity.setWeightTracker(weightTracker);
        }
        if (activityDTO.getPhysical() != null &&
                (activity.getPhysical() == null || !activity.getPhysical().getId().equals(activityDTO.getPhysical()))) {
            final PhysicalMovement physical = physicalMovementRepository.findById(activityDTO.getPhysical())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
            activity.setPhysical(physical);
        }
        if (activityDTO.getSteps() != null &&
                (activity.getSteps() == null || !activity.getSteps().getId().equals(activityDTO.getSteps()))) {
            final Step steps = stepRepository.findById(activityDTO.getSteps())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
            activity.setSteps(steps);
        }
        return activity;
    }

}
