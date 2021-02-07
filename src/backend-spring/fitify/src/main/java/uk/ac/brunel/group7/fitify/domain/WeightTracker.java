package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class WeightTracker {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long activityWeightID;

    @Column(nullable = false)
    private Long activityID;

    @Column(nullable = false)
    private Double weight;

    @Column(nullable = false, name = "\"description\"", columnDefinition = "longtext")
    private String description;

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

    public Long getActivityWeightID() {
        return activityWeightID;
    }

    public void setActivityWeightID(final Long activityWeightID) {
        this.activityWeightID = activityWeightID;
    }

    public Long getActivityID() {
        return activityID;
    }

    public void setActivityID(final Long activityID) {
        this.activityID = activityID;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(final Double weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(final String description) {
        this.description = description;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
