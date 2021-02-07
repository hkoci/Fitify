package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.UserFriend;


public interface UserFriendRepository extends JpaRepository<UserFriend, Long> {
    // add custom queries here
}
