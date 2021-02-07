package uk.ac.brunel.group7.fitify.model;


public class UserHealthPlanDTO {

    private Long id;
    private Integer fitPoints;
    private Integer age;
    private Double weight;
    private Double height;
    private Double bodyMassIndex;
    private Double basalMetabolicRate;
    private Integer intakeCalories;
    private Integer outtakeCalories;
    private Double targetWeight;
    private Double targetBMI;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public Integer getFitPoints() {
        return fitPoints;
    }

    public void setFitPoints(final Integer fitPoints) {
        this.fitPoints = fitPoints;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(final Integer age) {
        this.age = age;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(final Double weight) {
        this.weight = weight;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(final Double height) {
        this.height = height;
    }

    public Double getBodyMassIndex() {
        return bodyMassIndex;
    }

    public void setBodyMassIndex(final Double bodyMassIndex) {
        this.bodyMassIndex = bodyMassIndex;
    }

    public Double getBasalMetabolicRate() {
        return basalMetabolicRate;
    }

    public void setBasalMetabolicRate(final Double basalMetabolicRate) {
        this.basalMetabolicRate = basalMetabolicRate;
    }

    public Integer getIntakeCalories() {
        return intakeCalories;
    }

    public void setIntakeCalories(final Integer intakeCalories) {
        this.intakeCalories = intakeCalories;
    }

    public Integer getOuttakeCalories() {
        return outtakeCalories;
    }

    public void setOuttakeCalories(final Integer outtakeCalories) {
        this.outtakeCalories = outtakeCalories;
    }

    public Double getTargetWeight() {
        return targetWeight;
    }

    public void setTargetWeight(final Double targetWeight) {
        this.targetWeight = targetWeight;
    }

    public Double getTargetBMI() {
        return targetBMI;
    }

    public void setTargetBMI(final Double targetBMI) {
        this.targetBMI = targetBMI;
    }

}
