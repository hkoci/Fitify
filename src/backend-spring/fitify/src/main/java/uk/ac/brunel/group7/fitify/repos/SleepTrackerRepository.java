package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.SleepTracker;


public interface SleepTrackerRepository extends JpaRepository<SleepTracker, Long> {
    // add custom queries here
}
