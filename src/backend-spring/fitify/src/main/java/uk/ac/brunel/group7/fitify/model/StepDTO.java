package uk.ac.brunel.group7.fitify.model;

import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;


public class StepDTO {

    private Long activityStepID;

    @NotNull
    private Long activityID;

    private LocalDateTime stepsRecorded;

    private Integer pedometerCount;

    public Long getActivityStepID() {
        return activityStepID;
    }

    public void setActivityStepID(final Long activityStepID) {
        this.activityStepID = activityStepID;
    }

    public Long getActivityID() {
        return activityID;
    }

    public void setActivityID(final Long activityID) {
        this.activityID = activityID;
    }

    public LocalDateTime getStepsRecorded() {
        return stepsRecorded;
    }

    public void setStepsRecorded(final LocalDateTime stepsRecorded) {
        this.stepsRecorded = stepsRecorded;
    }

    public Integer getPedometerCount() {
        return pedometerCount;
    }

    public void setPedometerCount(final Integer pedometerCount) {
        this.pedometerCount = pedometerCount;
    }

}
