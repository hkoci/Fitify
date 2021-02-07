package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.NotNull;


public class PostDTO {

    private Long postID;

    @NotNull
    private Long userID;

    @NotNull
    private String post;

    @NotNull
    private Boolean publicVisibility;

    @NotNull
    private Boolean friendsVisibility;

    private String tags;

    private Long userLiked;

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

}
