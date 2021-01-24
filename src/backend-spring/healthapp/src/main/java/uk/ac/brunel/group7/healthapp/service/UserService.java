package uk.ac.brunel.group7.healthapp.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.healthapp.domain.User;
import uk.ac.brunel.group7.healthapp.model.UserDTO;
import uk.ac.brunel.group7.healthapp.repos.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(final UserRepository userRepository,
                       final PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
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
        userDTO.setHeight(user.getHeight());
        userDTO.setBodyMassIndex(user.getBodyMassIndex());
        userDTO.setFitPoints(user.getFitPoints());
        userDTO.setMoodScore(user.getMoodScore());
        userDTO.setWeightTarget(user.getWeightTarget());
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
        user.setHeight(userDTO.getHeight());
        user.setBodyMassIndex(userDTO.getBodyMassIndex());
        user.setFitPoints(userDTO.getFitPoints());
        user.setMoodScore(userDTO.getMoodScore());
        user.setWeightTarget(userDTO.getWeightTarget());
        return user;
    }

}
