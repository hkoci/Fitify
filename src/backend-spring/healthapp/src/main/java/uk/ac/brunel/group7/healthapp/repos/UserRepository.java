package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.User;


public interface UserRepository extends JpaRepository<User, Long> {
    // add custom queries here
}
