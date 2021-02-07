package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.NotNull;


public class WeightTrackerDTO {

    private Long activityWeightID;

    @NotNull
    private Long activityID;

    @NotNull
    private Double weight;

    @NotNull
    private String description;

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

}
