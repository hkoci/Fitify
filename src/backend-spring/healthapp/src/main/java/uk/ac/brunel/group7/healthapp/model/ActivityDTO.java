package uk.ac.brunel.group7.healthapp.model;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;


public class ActivityDTO {

    private Long id;

    @NotNull
    private Long activityUserId;

    @NotNull
    private LocalDateTime activityStart;

    private LocalDateTime activityEnd;

    @NotNull
    private String activityType;

    private Integer moodRating;

    private Long userActivities;

    private Long weightTracker;

    private Long physical;

    private Long steps;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public Long getActivityUserId() {
        return activityUserId;
    }

    public void setActivityUserId(final Long activityUserId) {
        this.activityUserId = activityUserId;
    }

    public LocalDateTime getActivityStart() {
        return activityStart;
    }

    public void setActivityStart(final LocalDateTime activityStart) {
        this.activityStart = activityStart;
    }

    public LocalDateTime getActivityEnd() {
        return activityEnd;
    }

    public void setActivityEnd(final LocalDateTime activityEnd) {
        this.activityEnd = activityEnd;
    }

    public String getActivityType() {
        return activityType;
    }

    public void setActivityType(final String activityType) {
        this.activityType = activityType;
    }

    public Integer getMoodRating() {
        return moodRating;
    }

    public void setMoodRating(final Integer moodRating) {
        this.moodRating = moodRating;
    }

    public Long getUserActivities() {
        return userActivities;
    }

    public void setUserActivities(final Long userActivities) {
        this.userActivities = userActivities;
    }

    public Long getWeightTracker() {
        return weightTracker;
    }

    public void setWeightTracker(final Long weightTracker) {
        this.weightTracker = weightTracker;
    }

    public Long getPhysical() {
        return physical;
    }

    public void setPhysical(final Long physical) {
        this.physical = physical;
    }

    public Long getSteps() {
        return steps;
    }

    public void setSteps(final Long steps) {
        this.steps = steps;
    }

}
