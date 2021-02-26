package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.UserHealthPlan;
import uk.ac.brunel.group7.fitify.model.UserHealthPlanDTO;
import uk.ac.brunel.group7.fitify.repos.UserHealthPlanRepository;


@Service
public class UserHealthPlanService {

    private final UserHealthPlanRepository userHealthPlanRepository;

    public UserHealthPlanService(final UserHealthPlanRepository userHealthPlanRepository) {
        this.userHealthPlanRepository = userHealthPlanRepository;
    }

    public List<UserHealthPlanDTO> findAll() {
        return userHealthPlanRepository.findAll()
                .stream()
                .map(userHealthPlan -> mapToDTO(userHealthPlan, new UserHealthPlanDTO()))
                .collect(Collectors.toList());
    }

    public UserHealthPlanDTO get(final Long id) {
        return userHealthPlanRepository.findById(id)
                .map(userHealthPlan -> mapToDTO(userHealthPlan, new UserHealthPlanDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final UserHealthPlanDTO userHealthPlanDTO) {
        final UserHealthPlan userHealthPlan = new UserHealthPlan();
        mapToEntity(userHealthPlanDTO, userHealthPlan);
        return userHealthPlanRepository.save(userHealthPlan).getId();
    }

    public void update(final Long id, final UserHealthPlanDTO userHealthPlanDTO) {
        final UserHealthPlan userHealthPlan = userHealthPlanRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(userHealthPlanDTO, userHealthPlan);
        userHealthPlanRepository.save(userHealthPlan);
    }

    public void delete(final Long id) {
        userHealthPlanRepository.deleteById(id);
    }

    private UserHealthPlanDTO mapToDTO(final UserHealthPlan userHealthPlan, final UserHealthPlanDTO userHealthPlanDTO) {
        userHealthPlanDTO.setId(userHealthPlan.getId());
        userHealthPlanDTO.setFitPoints(userHealthPlan.getFitPoints());
        userHealthPlanDTO.setAge(userHealthPlan.getAge());
        userHealthPlanDTO.setWeight(userHealthPlan.getWeight());
        userHealthPlanDTO.setHeight(userHealthPlan.getHeight());
        userHealthPlanDTO.setBodyMassIndex(userHealthPlan.getBodyMassIndex());
        userHealthPlanDTO.setBasalMetabolicRate(userHealthPlan.getBasalMetabolicRate());
        userHealthPlanDTO.setIntakeCalories(userHealthPlan.getIntakeCalories());
        userHealthPlanDTO.setOuttakeCalories(userHealthPlan.getOuttakeCalories());
        userHealthPlanDTO.setTargetWeight(userHealthPlan.getTargetWeight());
        userHealthPlanDTO.setTargetBMI(userHealthPlan.getTargetBMI());
        return userHealthPlanDTO;
    }

    private UserHealthPlan mapToEntity(final UserHealthPlanDTO userHealthPlanDTO, final UserHealthPlan userHealthPlan) {
        userHealthPlan.setFitPoints(userHealthPlanDTO.getFitPoints());
        userHealthPlan.setAge(userHealthPlanDTO.getAge());
        userHealthPlan.setWeight(userHealthPlanDTO.getWeight());
        userHealthPlan.setHeight(userHealthPlanDTO.getHeight());
        userHealthPlan.setBodyMassIndex(userHealthPlanDTO.getBodyMassIndex());
        userHealthPlan.setBasalMetabolicRate(userHealthPlanDTO.getBasalMetabolicRate());
        userHealthPlan.setIntakeCalories(userHealthPlanDTO.getIntakeCalories());
        userHealthPlan.setOuttakeCalories(userHealthPlanDTO.getOuttakeCalories());
        userHealthPlan.setTargetWeight(userHealthPlanDTO.getTargetWeight());
        userHealthPlan.setTargetBMI(userHealthPlanDTO.getTargetBMI());
        return userHealthPlan;
    }

}
