package uk.ac.brunel.group7.healthapp.model;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalTime;
import javax.validation.constraints.NotNull;


public class PhysicalMovementDTO {

    private Long id;

    @NotNull
    private String movementLocationDetails;

    private Long startLatitude;

    private Long startLongitude;

    private Long endLatitude;

    private Long endLongitude;

    @NotNull
    @Schema(type = "string" , example = "14:30:00")
    private LocalTime duration;

    private Double distance;

    private Double pace;

    @Schema(type = "string" , example = "14:30:00")
    private LocalTime startTime;

    @Schema(type = "string" , example = "14:30:00")
    private LocalTime endTime;

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

}
