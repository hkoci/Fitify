package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.User;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
