package uk.ac.brunel.group7.fitify.model;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;


public class ActivityDTO {

    private Long activityID;

    @NotNull
    private Long userID;

    @NotNull
    private LocalDateTime activityStart;

    private LocalDateTime activityEnd;

    @NotNull
    private String activityType;

    private Integer moodRating;

    private Integer caloriesBurnt;

    public Long getActivityID() {
        return activityID;
    }

    public void setActivityID(final Long activityID) {
        this.activityID = activityID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(final Long userID) {
        this.userID = userID;
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

    public Integer getCaloriesBurnt() {
        return caloriesBurnt;
    }

    public void setCaloriesBurnt(final Integer caloriesBurnt) {
        this.caloriesBurnt = caloriesBurnt;
    }

}
