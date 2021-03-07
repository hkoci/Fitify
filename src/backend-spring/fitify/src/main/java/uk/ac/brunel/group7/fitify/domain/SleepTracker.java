package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.OffsetDateTime;


@Entity
public class SleepTracker {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long activitySleepID;

    @Column(nullable = false)
    private Long activityID;

    @Column
    private LocalDate sleepDate;

    @Column
    private LocalTime sleepTime;

    @Column
    private LocalTime awakeTime;

    @Column
    private Double sleepingHrs;

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

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
