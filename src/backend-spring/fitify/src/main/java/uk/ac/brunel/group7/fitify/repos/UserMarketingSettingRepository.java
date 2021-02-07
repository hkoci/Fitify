package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.UserMarketingSetting;


public interface UserMarketingSettingRepository extends JpaRepository<UserMarketingSetting, Long> {
    // add custom queries here
}
