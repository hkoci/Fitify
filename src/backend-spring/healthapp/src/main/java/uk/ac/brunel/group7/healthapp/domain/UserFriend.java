package uk.ac.brunel.group7.healthapp.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class UserFriend {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long friendIds;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userfriends_id")
    private User userfriends;

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

    public Long getFriendIds() {
        return friendIds;
    }

    public void setFriendIds(final Long friendIds) {
        this.friendIds = friendIds;
    }

    public User getUserfriends() {
        return userfriends;
    }

    public void setUserfriends(final User userfriends) {
        this.userfriends = userfriends;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
