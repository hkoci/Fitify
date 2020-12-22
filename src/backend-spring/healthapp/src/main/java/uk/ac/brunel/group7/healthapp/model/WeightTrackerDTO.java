package uk.ac.brunel.group7.healthapp.model;

import javax.validation.constraints.NotNull;


public class WeightTrackerDTO {

    private Long id;

    @NotNull
    private Double weight;

    @NotNull
    private String description;

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

}
