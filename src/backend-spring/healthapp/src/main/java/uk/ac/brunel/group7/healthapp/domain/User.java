package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Set;


@Entity
public class User {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, columnDefinition = "longtext")
    private String passwordHash;

    @Column(nullable = false, name = "\"role\"")
    private String role;

    @Column(nullable = false, columnDefinition = "longtext")
    private String firstName;

    @Column(nullable = false, columnDefinition = "longtext")
    private String lastName;

    @Column(nullable = false, columnDefinition = "longtext")
    private String gender;

    @Column(nullable = false)
    private String emailAddress;

    @Column(nullable = false)
    private LocalDate dob;

    @Column
    private Double height;

    @Column
    private Double bodyMassIndex;

    @Column
    private Integer fitPoints;

    @Column
    private Double moodScore;

    @Column
    private Double weightTarget;

    @OneToMany(mappedBy = "userActivities", targetEntity = Activity.class)
    private Set<Activity> userActivitiesActivitys;

    @OneToMany(mappedBy = "userPosts", targetEntity = Post.class)
    private Set<Post> userPostsPosts;

    @OneToMany(mappedBy = "userfriends", targetEntity = UserFriend.class)
    private Set<UserFriend> userfriendsUserFriends;

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

    public Set<Activity> getUserActivitiesActivitys() {
        return userActivitiesActivitys;
    }

    public void setUserActivitiesActivitys(final Set<Activity> userActivitiesActivitys) {
        this.userActivitiesActivitys = userActivitiesActivitys;
    }

    public Set<Post> getUserPostsPosts() {
        return userPostsPosts;
    }

    public void setUserPostsPosts(final Set<Post> userPostsPosts) {
        this.userPostsPosts = userPostsPosts;
    }

    public Set<UserFriend> getUserfriendsUserFriends() {
        return userfriendsUserFriends;
    }

    public void setUserfriendsUserFriends(final Set<UserFriend> userfriendsUserFriends) {
        this.userfriendsUserFriends = userfriendsUserFriends;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
