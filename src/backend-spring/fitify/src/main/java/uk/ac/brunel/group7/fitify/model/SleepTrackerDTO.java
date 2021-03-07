package uk.ac.brunel.group7.fitify.model;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDate;
import java.time.LocalTime;
import javax.validation.constraints.NotNull;


public class SleepTrackerDTO {

    private Long activitySleepID;

    @NotNull
    private Long activityID;

    private LocalDate sleepDate;

    @Schema(type = "string", example = "14:30:00")
    private LocalTime sleepTime;

    @Schema(type = "string", example = "14:30:00")
    private LocalTime awakeTime;

    private Double sleepingHrs;

    public Long getActivitySleepID() {
        return activitySleepID;
    }

    public void setActivitySleepID(final Long activitySleepID) {
        this.activitySleepID = activitySleepID;
    }

    public Long getActivityID() {
        return activityID;
    }

    public void setActivityID(final Long activityID) {
        this.activityID = activityID;
    }

    public LocalDate getSleepDate() {
        return sleepDate;
    }

    public void setSleepDate(final LocalDate sleepDate) {
        this.sleepDate = sleepDate;
    }

    public LocalTime getSleepTime() {
        return sleepTime;
    }

    public void setSleepTime(final LocalTime sleepTime) {
        this.sleepTime = sleepTime;
    }

    public LocalTime getAwakeTime() {
        return awakeTime;
    }

    public void setAwakeTime(final LocalTime awakeTime) {
        this.awakeTime = awakeTime;
    }

    public Double getSleepingHrs() {
        return sleepingHrs;
    }

    public void setSleepingHrs(final Double sleepingHrs) {
        this.sleepingHrs = sleepingHrs;
    }

}
