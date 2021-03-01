package uk.ac.brunel.group7.fitify.repos;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.Activity;
import uk.ac.brunel.group7.fitify.domain.User;


public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Optional<Activity> findByUserID(Long userID);
}
