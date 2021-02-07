package uk.ac.brunel.group7.fitify.model;

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

    private Integer fitPoints;

    @Size(max = 255)
    private String avatarImage;

    private Long friend;

    private Long apperance;

    private Long notification;

    private Long marketing;

    private Long health;

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

    public Integer getFitPoints() {
        return fitPoints;
    }

    public void setFitPoints(final Integer fitPoints) {
        this.fitPoints = fitPoints;
    }

    public String getAvatarImage() {
        return avatarImage;
    }

    public void setAvatarImage(final String avatarImage) {
        this.avatarImage = avatarImage;
    }

    public Long getFriend() {
        return friend;
    }

    public void setFriend(final Long friend) {
        this.friend = friend;
    }

    public Long getApperance() {
        return apperance;
    }

    public void setApperance(final Long apperance) {
        this.apperance = apperance;
    }

    public Long getNotification() {
        return notification;
    }

    public void setNotification(final Long notification) {
        this.notification = notification;
    }

    public Long getMarketing() {
        return marketing;
    }

    public void setMarketing(final Long marketing) {
        this.marketing = marketing;
    }

    public Long getHealth() {
        return health;
    }

    public void setHealth(final Long health) {
        this.health = health;
    }

}
