package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;


@Entity
public class Step {

    @Id
    @Column(nullable = false, updatable = false)
    @SequenceGenerator(name = "primary_sequence", sequenceName = "primary_sequence",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "primary_sequence")
    private Long id;

    @Column
    private LocalDateTime stepsRecorded;

    @Column
    private Integer pedometerCount;

    @OneToOne(mappedBy = "steps", fetch = FetchType.LAZY)
    private Activity steps;

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

    public Activity getSteps() {
        return steps;
    }

    public void setSteps(final Activity steps) {
        this.steps = steps;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
