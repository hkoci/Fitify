package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.UserMarketingSetting;
import uk.ac.brunel.group7.fitify.model.UserMarketingSettingDTO;
import uk.ac.brunel.group7.fitify.repos.UserMarketingSettingRepository;


@Service
public class UserMarketingSettingService {

    private final UserMarketingSettingRepository userMarketingSettingRepository;

    public UserMarketingSettingService(final UserMarketingSettingRepository userMarketingSettingRepository) {
        this.userMarketingSettingRepository = userMarketingSettingRepository;
    }

    public List<UserMarketingSettingDTO> findAll() {
        return userMarketingSettingRepository.findAll()
                .stream()
                .map(userMarketingSetting -> mapToDTO(userMarketingSetting, new UserMarketingSettingDTO()))
                .collect(Collectors.toList());
    }

    public UserMarketingSettingDTO get(final Long id) {
        return userMarketingSettingRepository.findById(id)
                .map(userMarketingSetting -> mapToDTO(userMarketingSetting, new UserMarketingSettingDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserMarketingSettingDTO userMarketingSettingDTO) {
        final UserMarketingSetting userMarketingSetting = new UserMarketingSetting();
        mapToEntity(userMarketingSettingDTO, userMarketingSetting);
        return userMarketingSettingRepository.save(userMarketingSetting).getId();
    }

    public void update(final Long id, final UserMarketingSettingDTO userMarketingSettingDTO) {
        final UserMarketingSetting userMarketingSetting = userMarketingSettingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userMarketingSettingDTO, userMarketingSetting);
        userMarketingSettingRepository.save(userMarketingSetting);
    }

    public void delete(final Long id) {
        userMarketingSettingRepository.deleteById(id);
    }

    private UserMarketingSettingDTO mapToDTO(final UserMarketingSetting userMarketingSetting, final UserMarketingSettingDTO userMarketingSettingDTO) {
        userMarketingSettingDTO.setId(userMarketingSetting.getId());
        userMarketingSettingDTO.setMarketingEmailPreference(userMarketingSetting.getMarketingEmailPreference());
        userMarketingSettingDTO.setDailyEmailProgressPreference(userMarketingSetting.getDailyEmailProgressPreference());
        userMarketingSettingDTO.setWeeklyEmailProgressPreference(userMarketingSetting.getWeeklyEmailProgressPreference());
        userMarketingSettingDTO.setMarketingRoadmapPreference(userMarketingSetting.getMarketingRoadmapPreference());
        userMarketingSettingDTO.setProgressPreference(userMarketingSetting.getProgressPreference());
        userMarketingSettingDTO.setAchievementsPreference(userMarketingSetting.getAchievementsPreference());
        return userMarketingSettingDTO;
    }

    private UserMarketingSetting mapToEntity(final UserMarketingSettingDTO userMarketingSettingDTO, final UserMarketingSetting userMarketingSetting) {
        userMarketingSetting.setMarketingEmailPreference(userMarketingSettingDTO.getMarketingEmailPreference());
        userMarketingSetting.setDailyEmailProgressPreference(userMarketingSettingDTO.getDailyEmailProgressPreference());
        userMarketingSetting.setWeeklyEmailProgressPreference(userMarketingSettingDTO.getWeeklyEmailProgressPreference());
        userMarketingSetting.setMarketingRoadmapPreference(userMarketingSettingDTO.getMarketingRoadmapPreference());
        userMarketingSetting.setProgressPreference(userMarketingSettingDTO.getProgressPreference());
        userMarketingSetting.setAchievementsPreference(userMarketingSettingDTO.getAchievementsPreference());
        return userMarketingSetting;
    }

}
