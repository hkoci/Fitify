package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.WeightTracker;


public interface WeightTrackerRepository extends JpaRepository<WeightTracker, Long> {
    // add custom queries here
}
