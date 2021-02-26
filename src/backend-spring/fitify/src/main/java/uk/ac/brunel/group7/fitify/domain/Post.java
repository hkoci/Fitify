package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class Post {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postID;

    @Column(nullable = false)
    private Long userID;

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

    public Long getPostID() {
        return postID;
    }

    public void setPostID(final Long postID) {
        this.postID = postID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(final Long userID) {
        this.userID = userID;
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

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
