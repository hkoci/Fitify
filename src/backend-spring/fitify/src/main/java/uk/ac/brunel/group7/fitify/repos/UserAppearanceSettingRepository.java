package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.UserAppearanceSetting;


public interface UserAppearanceSettingRepository extends JpaRepository<UserAppearanceSetting, Long> {
    // add custom queries here
}
