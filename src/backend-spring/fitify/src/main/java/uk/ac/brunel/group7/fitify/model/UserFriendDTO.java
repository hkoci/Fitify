package uk.ac.brunel.group7.fitify.model;


public class UserFriendDTO {

    private Long userFriendid;
    private Long friendIds;

    public Long getUserFriendid() {
        return userFriendid;
    }

    public void setUserFriendid(final Long userFriendid) {
        this.userFriendid = userFriendid;
    }

    public Long getFriendIds() {
        return friendIds;
    }

    public void setFriendIds(final Long friendIds) {
        this.friendIds = friendIds;
    }

}
