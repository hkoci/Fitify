package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.UserAppearanceSetting;
import uk.ac.brunel.group7.fitify.model.UserAppearanceSettingDTO;
import uk.ac.brunel.group7.fitify.repos.UserAppearanceSettingRepository;


@Service
public class UserAppearanceSettingService {

    private final UserAppearanceSettingRepository userAppearanceSettingRepository;

    public UserAppearanceSettingService(final UserAppearanceSettingRepository userAppearanceSettingRepository) {
        this.userAppearanceSettingRepository = userAppearanceSettingRepository;
    }

    public List<UserAppearanceSettingDTO> findAll() {
        return userAppearanceSettingRepository.findAll()
                .stream()
                .map(userAppearanceSetting -> mapToDTO(userAppearanceSetting, new UserAppearanceSettingDTO()))
                .collect(Collectors.toList());
    }

    public UserAppearanceSettingDTO get(final Long id) {
        return userAppearanceSettingRepository.findById(id)
                .map(userAppearanceSetting -> mapToDTO(userAppearanceSetting, new UserAppearanceSettingDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserAppearanceSettingDTO userAppearanceSettingDTO) {
        final UserAppearanceSetting userAppearanceSetting = new UserAppearanceSetting();
        mapToEntity(userAppearanceSettingDTO, userAppearanceSetting);
        return userAppearanceSettingRepository.save(userAppearanceSetting).getId();
    }

    public void update(final Long id, final UserAppearanceSettingDTO userAppearanceSettingDTO) {
        final UserAppearanceSetting userAppearanceSetting = userAppearanceSettingRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userAppearanceSettingDTO, userAppearanceSetting);
        userAppearanceSettingRepository.save(userAppearanceSetting);
    }

    public void delete(final Long id) {
        userAppearanceSettingRepository.deleteById(id);
    }

    private UserAppearanceSettingDTO mapToDTO(final UserAppearanceSetting userAppearanceSetting, final UserAppearanceSettingDTO userAppearanceSettingDTO) {
        userAppearanceSettingDTO.setId(userAppearanceSetting.getId());
        userAppearanceSettingDTO.setPrimaryHexColour(userAppearanceSetting.getPrimaryHexColour());
        userAppearanceSettingDTO.setSecondaryHexColour(userAppearanceSetting.getSecondaryHexColour());
        userAppearanceSettingDTO.setDarkMode(userAppearanceSetting.getDarkMode());
        userAppearanceSettingDTO.setHighContrast(userAppearanceSetting.getHighContrast());
        userAppearanceSettingDTO.setTextSize(userAppearanceSetting.getTextSize());
        userAppearanceSettingDTO.setAvatarDefaultColour(userAppearanceSetting.getAvatarDefaultColour());
        return userAppearanceSettingDTO;
    }

    private UserAppearanceSetting mapToEntity(final UserAppearanceSettingDTO userAppearanceSettingDTO, final UserAppearanceSetting userAppearanceSetting) {
        userAppearanceSetting.setPrimaryHexColour(userAppearanceSettingDTO.getPrimaryHexColour());
        userAppearanceSetting.setSecondaryHexColour(userAppearanceSettingDTO.getSecondaryHexColour());
        userAppearanceSetting.setDarkMode(userAppearanceSettingDTO.getDarkMode());
        userAppearanceSetting.setHighContrast(userAppearanceSettingDTO.getHighContrast());
        userAppearanceSetting.setTextSize(userAppearanceSettingDTO.getTextSize());
        userAppearanceSetting.setAvatarDefaultColour(userAppearanceSettingDTO.getAvatarDefaultColour());
        return userAppearanceSetting;
    }

}
