package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;


@Entity
public class Step {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long activityStepID;

    @Column(nullable = false)
    private Long activityID;

    @Column
    private LocalDateTime stepsRecorded;

    @Column
    private Integer pedometerCount;

    @Column(nullable = false, updatable = false)
    protected OffsetDateTime dateCreated;

    @Column(nullable = false)
    protected OffsetDateTime lastUpdated;

    @PrePersist
    public void prePersist() {
        dateCreated = OffsetDateTime.now();
        lastUpdated = dateCreated;
    }

    @PreUpdate
    public void preUpdate() {
        lastUpdated = OffsetDateTime.now();
    }

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

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
