package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;


@Entity
public class Activity {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long activityID;

    @Column(nullable = false)
    private Long userID;

    @Column(nullable = false)
    private LocalDateTime activityStart;

    @Column
    private LocalDateTime activityEnd;

    @Column(nullable = false, columnDefinition = "longtext")
    private String activityType;

    @Column
    private Integer moodRating;

    @Column
    private Integer caloriesBurnt;

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

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
