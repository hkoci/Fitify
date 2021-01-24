package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class Post {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userPosted;

    @Column(nullable = false, columnDefinition = "longtext")
    private String post;

    @Column(nullable = false)
    private Boolean publicVisibility;

    @Column(nullable = false)
    private Boolean friendsVisibility;

    @Column(columnDefinition = "longtext")
    private String tags;

    @Column
    private Long userLiked;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_posts_id")
    private User userPosts;

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

    public Long getUserPosted() {
        return userPosted;
    }

    public void setUserPosted(final Long userPosted) {
        this.userPosted = userPosted;
    }

    public String getPost() {
        return post;
    }

    public void setPost(final String post) {
        this.post = post;
    }

    public Boolean getPublicVisibility() {
        return publicVisibility;
    }

    public void setPublicVisibility(final Boolean publicVisibility) {
        this.publicVisibility = publicVisibility;
    }

    public Boolean getFriendsVisibility() {
        return friendsVisibility;
    }

    public void setFriendsVisibility(final Boolean friendsVisibility) {
        this.friendsVisibility = friendsVisibility;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(final String tags) {
        this.tags = tags;
    }

    public Long getUserLiked() {
        return userLiked;
    }

    public void setUserLiked(final Long userLiked) {
        this.userLiked = userLiked;
    }

    public User getUserPosts() {
        return userPosts;
    }

    public void setUserPosts(final User userPosts) {
        this.userPosts = userPosts;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
