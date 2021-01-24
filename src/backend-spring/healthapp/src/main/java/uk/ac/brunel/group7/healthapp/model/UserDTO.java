package uk.ac.brunel.group7.healthapp.model;

import java.time.LocalDate;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class UserDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String username;

    @NotNull
    private String passwordHash;

    @NotNull
    @Size(max = 255)
    private String role;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String gender;

    @NotNull
    @Size(max = 255)
    private String emailAddress;

    @NotNull
    private LocalDate dob;

    private Double height;

    private Double bodyMassIndex;

    private Integer fitPoints;

    private Double moodScore;

    private Double weightTarget;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(final String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getRole() {
        return role;
    }

    public void setRole(final String role) {
        this.role = role;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(final String gender) {
        this.gender = gender;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(final String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(final LocalDate dob) {
        this.dob = dob;
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

    public Integer getFitPoints() {
        return fitPoints;
    }

    public void setFitPoints(final Integer fitPoints) {
        this.fitPoints = fitPoints;
    }

    public Double getMoodScore() {
        return moodScore;
    }

    public void setMoodScore(final Double moodScore) {
        this.moodScore = moodScore;
    }

    public Double getWeightTarget() {
        return weightTarget;
    }

    public void setWeightTarget(final Double weightTarget) {
        this.weightTarget = weightTarget;
    }

}
