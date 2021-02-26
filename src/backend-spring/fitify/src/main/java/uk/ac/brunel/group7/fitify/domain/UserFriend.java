package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class UserFriend {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userFriendid;

    @Column
    private Long friendIds;

    @OneToOne(mappedBy = "friend", fetch = FetchType.LAZY)
    private User friend;

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

    public User getFriend() {
        return friend;
    }

    public void setFriend(final User friend) {
        this.friend = friend;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
