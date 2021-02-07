package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class UserHealthPlan {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer fitPoints;

    @Column
    private Integer age;

    @Column
    private Double weight;

    @Column
    private Double height;

    @Column
    private Double bodyMassIndex;

    @Column
    private Double basalMetabolicRate;

    @Column
    private Integer intakeCalories;

    @Column
    private Integer outtakeCalories;

    @Column
    private Double targetWeight;

    @Column
    private Double targetBMI;

    @OneToOne(mappedBy = "health", fetch = FetchType.LAZY)
    private User health;

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

    public User getHealth() {
        return health;
    }

    public void setHealth(final User health) {
        this.health = health;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
