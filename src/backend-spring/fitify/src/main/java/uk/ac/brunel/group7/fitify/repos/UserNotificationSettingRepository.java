package uk.ac.brunel.group7.fitify.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import uk.ac.brunel.group7.fitify.domain.UserNotificationSetting;


public interface UserNotificationSettingRepository extends JpaRepository<UserNotificationSetting, Long> {
    // add custom queries here
}
