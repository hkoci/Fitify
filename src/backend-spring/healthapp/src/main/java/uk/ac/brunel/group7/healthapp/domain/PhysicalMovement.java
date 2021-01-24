package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.LocalTime;
import java.time.OffsetDateTime;


@Entity
public class PhysicalMovement {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "longtext")
    private String movementLocationDetails;

    @Column
    private Long startLatitude;

    @Column
    private Long startLongitude;

    @Column
    private Long endLatitude;

    @Column
    private Long endLongitude;

    @Column(nullable = false)
    private LocalTime duration;

    @Column
    private Double distance;

    @Column
    private Double pace;

    @Column
    private LocalTime startTime;

    @Column
    private LocalTime endTime;

    @OneToOne(mappedBy = "physical", fetch = FetchType.LAZY)
    private Activity physical;

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

    public String getMovementLocationDetails() {
        return movementLocationDetails;
    }

    public void setMovementLocationDetails(final String movementLocationDetails) {
        this.movementLocationDetails = movementLocationDetails;
    }

    public Long getStartLatitude() {
        return startLatitude;
    }

    public void setStartLatitude(final Long startLatitude) {
        this.startLatitude = startLatitude;
    }

    public Long getStartLongitude() {
        return startLongitude;
    }

    public void setStartLongitude(final Long startLongitude) {
        this.startLongitude = startLongitude;
    }

    public Long getEndLatitude() {
        return endLatitude;
    }

    public void setEndLatitude(final Long endLatitude) {
        this.endLatitude = endLatitude;
    }

    public Long getEndLongitude() {
        return endLongitude;
    }

    public void setEndLongitude(final Long endLongitude) {
        this.endLongitude = endLongitude;
    }

    public LocalTime getDuration() {
        return duration;
    }

    public void setDuration(final LocalTime duration) {
        this.duration = duration;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(final Double distance) {
        this.distance = distance;
    }

    public Double getPace() {
        return pace;
    }

    public void setPace(final Double pace) {
        this.pace = pace;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(final LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(final LocalTime endTime) {
        this.endTime = endTime;
    }

    public Activity getPhysical() {
        return physical;
    }

    public void setPhysical(final Activity physical) {
        this.physical = physical;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
