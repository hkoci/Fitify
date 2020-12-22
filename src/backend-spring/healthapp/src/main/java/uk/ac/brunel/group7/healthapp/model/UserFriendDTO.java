package uk.ac.brunel.group7.healthapp.model;



public class UserFriendDTO {

    private Long id;

    private Long friendIds;

    private Long userfriends;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public Long getFriendIds() {
        return friendIds;
    }

    public void setFriendIds(final Long friendIds) {
        this.friendIds = friendIds;
    }

    public Long getUserfriends() {
        return userfriends;
    }

    public void setUserfriends(final Long userfriends) {
        this.userfriends = userfriends;
    }

}
