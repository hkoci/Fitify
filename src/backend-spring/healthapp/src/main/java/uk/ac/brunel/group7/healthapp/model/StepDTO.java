package uk.ac.brunel.group7.healthapp.model;

import java.time.LocalDateTime;


public class StepDTO {

    private Long id;

    private LocalDateTime stepsRecorded;

    private Integer pedometerCount;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
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
