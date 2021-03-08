package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.NotNull;


public class WaterDTO {

    private Long waterID;

    @NotNull
    private Long activityID;

    private Double litres;

    public Long getWaterID() {
        return waterID;
    }

    public void setWaterID(final Long waterID) {
        this.waterID = waterID;
    }

    public Long getActivityID() {
        return activityID;
    }

    public void setActivityID(final Long activityID) {
        this.activityID = activityID;
    }

    public Double getLitres() {
        return litres;
    }

    public void setLitres(final Double litres) {
        this.litres = litres;
    }

}
