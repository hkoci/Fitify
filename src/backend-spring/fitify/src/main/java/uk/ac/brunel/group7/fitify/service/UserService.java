package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.User;
import uk.ac.brunel.group7.fitify.domain.UserAppearanceSetting;
import uk.ac.brunel.group7.fitify.domain.UserFriend;
import uk.ac.brunel.group7.fitify.domain.UserHealthPlan;
import uk.ac.brunel.group7.fitify.domain.UserMarketingSetting;
import uk.ac.brunel.group7.fitify.domain.UserNotificationSetting;
import uk.ac.brunel.group7.fitify.model.UserDTO;
import uk.ac.brunel.group7.fitify.repos.UserAppearanceSettingRepository;
import uk.ac.brunel.group7.fitify.repos.UserFriendRepository;
import uk.ac.brunel.group7.fitify.repos.UserHealthPlanRepository;
import uk.ac.brunel.group7.fitify.repos.UserMarketingSettingRepository;
import uk.ac.brunel.group7.fitify.repos.UserNotificationSettingRepository;
import uk.ac.brunel.group7.fitify.repos.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserFriendRepository userFriendRepository;
    private final UserAppearanceSettingRepository userAppearanceSettingRepository;
    private final UserNotificationSettingRepository userNotificationSettingRepository;
    private final UserMarketingSettingRepository userMarketingSettingRepository;
    private final UserHealthPlanRepository userHealthPlanRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(final UserRepository userRepository,
                       final UserFriendRepository userFriendRepository,
                       final UserAppearanceSettingRepository userAppearanceSettingRepository,
                       final UserNotificationSettingRepository userNotificationSettingRepository,
                       final UserMarketingSettingRepository userMarketingSettingRepository,
                       final UserHealthPlanRepository userHealthPlanRepository,
                       final PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userFriendRepository = userFriendRepository;
        this.userAppearanceSettingRepository = userAppearanceSettingRepository;
        this.userNotificationSettingRepository = userNotificationSettingRepository;
        this.userMarketingSettingRepository = userMarketingSettingRepository;
        this.userHealthPlanRepository = userHealthPlanRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<UserDTO> findAll() {
        return userRepository.findAll()
                .stream()
                .map(user -> mapToDTO(user, new UserDTO()))
                .collect(Collectors.toList());
    }

    public UserDTO get(final Long id) {
        return userRepository.findById(id)
                .map(user -> mapToDTO(user, new UserDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserDTO userDTO) {
        final User user = new User();
        mapToEntity(userDTO, user);
        return userRepository.save(user).getId();
    }

    public void update(final Long id, final UserDTO userDTO) {
        final User user = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userDTO, user);
        userRepository.save(user);
    }

    public void delete(final Long id) {
        userRepository.deleteById(id);
    }

    private UserDTO mapToDTO(final User user, final UserDTO userDTO) {
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setRole(user.getRole());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setGender(user.getGender());
        userDTO.setEmailAddress(user.getEmailAddress());
        userDTO.setDob(user.getDob());
        userDTO.setFitPoints(user.getFitPoints());
        userDTO.setAvatarImage(user.getAvatarImage());
        userDTO.setFriend(user.getFriend() == null ? null : user.getFriend().getUserFriendid());
        userDTO.setApperance(user.getApperance() == null ? null : user.getApperance().getId());
        userDTO.setNotification(user.getNotification() == null ? null : user.getNotification().getId());
        userDTO.setMarketing(user.getMarketing() == null ? null : user.getMarketing().getId());
        userDTO.setHealth(user.getHealth() == null ? null : user.getHealth().getId());
        return userDTO;
    }

    private User mapToEntity(final UserDTO userDTO, final User user) {
        user.setUsername(userDTO.getUsername());
        user.setPasswordHash(passwordEncoder.encode(userDTO.getPasswordHash()));
        user.setRole(userDTO.getRole());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setGender(userDTO.getGender());
        user.setEmailAddress(userDTO.getEmailAddress());
        user.setDob(userDTO.getDob());
        user.setFitPoints(userDTO.getFitPoints());
        user.setAvatarImage(userDTO.getAvatarImage());
        if (userDTO.getFriend() != null &&
                (user.getFriend() == null || !user.getFriend().getUserFriendid().equals(userDTO.getFriend()))) {
            final UserFriend friend = userFriendRepository.findById(userDTO.getFriend())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "one of friend not found"));
            user.setFriend(friend);
        }
        if (userDTO.getApperance() != null &&
                (user.getApperance() == null || !user.getApperance().getId().equals(userDTO.getApperance()))) {
            final UserAppearanceSetting apperance = userAppearanceSettingRepository.findById(userDTO.getApperance())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "one of apperance not found"));
            user.setApperance(apperance);
        }
        if (userDTO.getNotification() != null &&
                (user.getNotification() == null || !user.getNotification().getId().equals(userDTO.getNotification()))) {
            final UserNotificationSetting notification = userNotificationSettingRepository.findById(userDTO.getNotification())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "one of notification not found"));
            user.setNotification(notification);
        }
        if (userDTO.getMarketing() != null &&
                (user.getMarketing() == null || !user.getMarketing().getId().equals(userDTO.getMarketing()))) {
            final UserMarketingSetting marketing = userMarketingSettingRepository.findById(userDTO.getMarketing())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "one of marketing not found"));
            user.setMarketing(marketing);
        }
        if (userDTO.getHealth() != null &&
                (user.getHealth() == null || !user.getHealth().getId().equals(userDTO.getHealth()))) {
            final UserHealthPlan health = userHealthPlanRepository.findById(userDTO.getHealth())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "one of health not found"));
            user.setHealth(health);
        }
        return user;
    }

}
