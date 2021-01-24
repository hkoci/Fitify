package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class WeightTracker {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Double weight;

    @Column(nullable = false, name = "\"description\"", columnDefinition = "longtext")
    private String description;

    @OneToOne(mappedBy = "weightTracker", fetch = FetchType.LAZY)
    private Activity weightTracker;

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

    public Activity getWeightTracker() {
        return weightTracker;
    }

    public void setWeightTracker(final Activity weightTracker) {
        this.weightTracker = weightTracker;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
