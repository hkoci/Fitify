package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.UserNotificationSetting;
import uk.ac.brunel.group7.fitify.model.UserNotificationSettingDTO;
import uk.ac.brunel.group7.fitify.repos.UserNotificationSettingRepository;


@Service
public class UserNotificationSettingService {

    private final UserNotificationSettingRepository userNotificationSettingRepository;

    public UserNotificationSettingService(final UserNotificationSettingRepository userNotificationSettingRepository) {
        this.userNotificationSettingRepository = userNotificationSettingRepository;
    }

    public List<UserNotificationSettingDTO> findAll() {
        return userNotificationSettingRepository.findAll()
                .stream()
                .map(userNotificationSetting -> mapToDTO(userNotificationSetting, new UserNotificationSettingDTO()))
                .collect(Collectors.toList());
    }

    public UserNotificationSettingDTO get(final Long id) {
        return userNotificationSettingRepository.findById(id)
                .map(userNotificationSetting -> mapToDTO(userNotificationSetting, new UserNotificationSettingDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserNotificationSettingDTO userNotificationSettingDTO) {
        final UserNotificationSetting userNotificationSetting = new UserNotificationSetting();
        mapToEntity(userNotificationSettingDTO, userNotificationSetting);
        return userNotificationSettingRepository.save(userNotificationSetting).getId();
    }

    public void update(final Long id, final UserNotificationSettingDTO userNotificationSettingDTO) {
        final UserNotificationSetting userNotificationSetting = userNotificationSettingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userNotificationSettingDTO, userNotificationSetting);
        userNotificationSettingRepository.save(userNotificationSetting);
    }

    public void delete(final Long id) {
        userNotificationSettingRepository.deleteById(id);
    }

    private UserNotificationSettingDTO mapToDTO(final UserNotificationSetting userNotificationSetting, final UserNotificationSettingDTO userNotificationSettingDTO) {
        userNotificationSettingDTO.setId(userNotificationSetting.getId());
        userNotificationSettingDTO.setDailyNotificationProgress(userNotificationSetting.getDailyNotificationProgress());
        userNotificationSettingDTO.setWeeklyNotificationProgress(userNotificationSetting.getWeeklyNotificationProgress());
        userNotificationSettingDTO.setMonthlyNotificationProgress(userNotificationSetting.getMonthlyNotificationProgress());
        userNotificationSettingDTO.setWeightNotification(userNotificationSetting.getWeightNotification());
        userNotificationSettingDTO.setProgressNotification(userNotificationSetting.getProgressNotification());
        userNotificationSettingDTO.setAchievementsNotification(userNotificationSetting.getAchievementsNotification());
        return userNotificationSettingDTO;
    }

    private UserNotificationSetting mapToEntity(final UserNotificationSettingDTO userNotificationSettingDTO, final UserNotificationSetting userNotificationSetting) {
        userNotificationSetting.setDailyNotificationProgress(userNotificationSettingDTO.getDailyNotificationProgress());
        userNotificationSetting.setWeeklyNotificationProgress(userNotificationSettingDTO.getWeeklyNotificationProgress());
        userNotificationSetting.setMonthlyNotificationProgress(userNotificationSettingDTO.getMonthlyNotificationProgress());
        userNotificationSetting.setWeightNotification(userNotificationSettingDTO.getWeightNotification());
        userNotificationSetting.setProgressNotification(userNotificationSettingDTO.getProgressNotification());
        userNotificationSetting.setAchievementsNotification(userNotificationSettingDTO.getAchievementsNotification());
        return userNotificationSetting;
    }

}
