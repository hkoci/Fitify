package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.Set;


@Entity
public class User {

    @Id
    @Column(nullable = false, updatable = false)
    @SequenceGenerator(name = "primary_sequence", sequenceName = "primary_sequence",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "primary_sequence")
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, columnDefinition = "clob")
    private String firstName;

    @Column(nullable = false, columnDefinition = "clob")
    private String lastName;

    @Column(nullable = false, columnDefinition = "clob")
    private String gender;

    @Column(nullable = false)
    private String emailAddress;

    @Column(nullable = false)
    private LocalDate dob;

    @Column(nullable = false)
    private LocalDateTime userCreated;

    @Column(nullable = false)
    private LocalDateTime userLastAuth;

    @OneToMany(mappedBy = "userActivities", targetEntity = Activity.class)
    private Set<Activity> activityUserActivitiess;

    @OneToMany(mappedBy = "userPosts", targetEntity = Post.class)
    private Set<Post> postUserPostss;

    @OneToMany(mappedBy = "userfriends", targetEntity = UserFriend.class)
    private Set<UserFriend> userFriendUserfriendss;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
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

    public LocalDateTime getUserCreated() {
        return userCreated;
    }

    public void setUserCreated(final LocalDateTime userCreated) {
        this.userCreated = userCreated;
    }

    public LocalDateTime getUserLastAuth() {
        return userLastAuth;
    }

    public void setUserLastAuth(final LocalDateTime userLastAuth) {
        this.userLastAuth = userLastAuth;
    }

    public Set<Activity> getActivityUserActivitiess() {
        return activityUserActivitiess;
    }

    public void setActivityUserActivitiess(final Set<Activity> activityUserActivitiess) {
        this.activityUserActivitiess = activityUserActivitiess;
    }

    public Set<Post> getPostUserPostss() {
        return postUserPostss;
    }

    public void setPostUserPostss(final Set<Post> postUserPostss) {
        this.postUserPostss = postUserPostss;
    }

    public Set<UserFriend> getUserFriendUserfriendss() {
        return userFriendUserfriendss;
    }

    public void setUserFriendUserfriendss(final Set<UserFriend> userFriendUserfriendss) {
        this.userFriendUserfriendss = userFriendUserfriendss;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
