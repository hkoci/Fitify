package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.PhysicalMovement;


public interface PhysicalMovementRepository extends JpaRepository<PhysicalMovement, Long> {
    // add custom queries here
}
