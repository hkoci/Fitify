package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.Step;


public interface StepRepository extends JpaRepository<Step, Long> {
    // add custom queries here
}
