package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.UserFriend;


public interface UserFriendRepository extends JpaRepository<UserFriend, Long> {
    // add custom queries here
}
