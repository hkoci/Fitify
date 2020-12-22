package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.PhysicalMovement;


public interface PhysicalMovementRepository extends JpaRepository<PhysicalMovement, Long> {
    // add custom queries here
}
