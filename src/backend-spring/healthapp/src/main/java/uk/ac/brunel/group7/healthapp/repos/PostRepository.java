package uk.ac.brunel.group7.healthapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.healthapp.domain.Post;


public interface PostRepository extends JpaRepository<Post, Long> {
    // add custom queries here
}
