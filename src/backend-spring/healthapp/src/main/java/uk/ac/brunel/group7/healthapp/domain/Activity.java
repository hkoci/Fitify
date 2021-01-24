package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;


@Entity
public class Activity {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long activityUserId;

    @Column(nullable = false)
    private LocalDateTime activityStart;

    @Column
    private LocalDateTime activityEnd;

    @Column(nullable = false, columnDefinition = "longtext")
    private String activityType;

    @Column
    private Integer moodRating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_activities_id")
    private User userActivities;

    @OneToOne
    @JoinColumn(name = "weight_tracker_id")
    private WeightTracker weightTracker;

    @OneToOne
    @JoinColumn(name = "physical_id")
    private PhysicalMovement physical;

    @OneToOne
    @JoinColumn(name = "steps_id")
    private Step steps;

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

    public User getUserActivities() {
        return userActivities;
    }

    public void setUserActivities(final User userActivities) {
        this.userActivities = userActivities;
    }

    public WeightTracker getWeightTracker() {
        return weightTracker;
    }

    public void setWeightTracker(final WeightTracker weightTracker) {
        this.weightTracker = weightTracker;
    }

    public PhysicalMovement getPhysical() {
        return physical;
    }

    public void setPhysical(final PhysicalMovement physical) {
        this.physical = physical;
    }

    public Step getSteps() {
        return steps;
    }

    public void setSteps(final Step steps) {
        this.steps = steps;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
