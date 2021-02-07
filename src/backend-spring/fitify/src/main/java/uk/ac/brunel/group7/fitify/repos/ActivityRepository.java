package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.Activity;


public interface ActivityRepository extends JpaRepository<Activity, Long> {
    // add custom queries here
}
