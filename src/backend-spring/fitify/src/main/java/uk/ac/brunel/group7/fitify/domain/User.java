package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.OffsetDateTime;


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

    @Column
    private LocalDate dob;

    @Column
    private Integer fitPoints;

    @Column
    private String avatarImage;

    @OneToOne
    @JoinColumn(name = "friend_id")
    private UserFriend friend;

    @OneToOne
    @JoinColumn(name = "apperance_id")
    private UserAppearanceSetting apperance;

    @OneToOne
    @JoinColumn(name = "notification_id")
    private UserNotificationSetting notification;

    @OneToOne
    @JoinColumn(name = "marketing_id")
    private UserMarketingSetting marketing;

    @OneToOne
    @JoinColumn(name = "health_id")
    private UserHealthPlan health;

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

    public UserFriend getFriend() {
        return friend;
    }

    public void setFriend(final UserFriend friend) {
        this.friend = friend;
    }

    public UserAppearanceSetting getApperance() {
        return apperance;
    }

    public void setApperance(final UserAppearanceSetting apperance) {
        this.apperance = apperance;
    }

    public UserNotificationSetting getNotification() {
        return notification;
    }

    public void setNotification(final UserNotificationSetting notification) {
        this.notification = notification;
    }

    public UserMarketingSetting getMarketing() {
        return marketing;
    }

    public void setMarketing(final UserMarketingSetting marketing) {
        this.marketing = marketing;
    }

    public UserHealthPlan getHealth() {
        return health;
    }

    public void setHealth(final UserHealthPlan health) {
        this.health = health;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
