package uk.ac.brunel.group7.healthapp.model;

import javax.validation.constraints.NotNull;


public class PostDTO {

    private Long id;

    @NotNull
    private Long userPosted;

    @NotNull
    private String post;

    @NotNull
    private Boolean publicVisibility;

    @NotNull
    private Boolean friendsVisibility;

    private String tags;

    private Long userLiked;

    private Long userPosts;

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

    public Long getUserPosts() {
        return userPosts;
    }

    public void setUserPosts(final Long userPosts) {
        this.userPosts = userPosts;
    }

}
