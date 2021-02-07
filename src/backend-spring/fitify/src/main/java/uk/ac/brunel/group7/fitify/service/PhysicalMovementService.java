package uk.ac.brunel.group7.fitify.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.PhysicalMovement;
import uk.ac.brunel.group7.fitify.model.PhysicalMovementDTO;
import uk.ac.brunel.group7.fitify.repos.PhysicalMovementRepository;


@Service
public class PhysicalMovementService {

    private final PhysicalMovementRepository physicalMovementRepository;

    public PhysicalMovementService(final PhysicalMovementRepository physicalMovementRepository) {
        this.physicalMovementRepository = physicalMovementRepository;
    }

    public List<PhysicalMovementDTO> findAll() {
        return physicalMovementRepository.findAll()
                .stream()
                .map(physicalMovement -> mapToDTO(physicalMovement, new PhysicalMovementDTO()))
                .collect(Collectors.toList());
    }

    public PhysicalMovementDTO get(final Long acitivityMovementID) {
        return physicalMovementRepository.findById(acitivityMovementID)
                .map(physicalMovement -> mapToDTO(physicalMovement, new PhysicalMovementDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final PhysicalMovementDTO physicalMovementDTO) {
        final PhysicalMovement physicalMovement = new PhysicalMovement();
        mapToEntity(physicalMovementDTO, physicalMovement);
        return physicalMovementRepository.save(physicalMovement).getAcitivityMovementID();
    }

    public void update(final Long acitivityMovementID, final PhysicalMovementDTO physicalMovementDTO) {
        final PhysicalMovement physicalMovement = physicalMovementRepository.findById(acitivityMovementID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(physicalMovementDTO, physicalMovement);
        physicalMovementRepository.save(physicalMovement);
    }

    public void delete(final Long acitivityMovementID) {
        physicalMovementRepository.deleteById(acitivityMovementID);
    }

    private PhysicalMovementDTO mapToDTO(final PhysicalMovement physicalMovement, final PhysicalMovementDTO physicalMovementDTO) {
        physicalMovementDTO.setAcitivityMovementID(physicalMovement.getAcitivityMovementID());
        physicalMovementDTO.setActivityID(physicalMovement.getActivityID());
        physicalMovementDTO.setMovementLocationDetails(physicalMovement.getMovementLocationDetails());
        physicalMovementDTO.setStartLatitude(physicalMovement.getStartLatitude());
        physicalMovementDTO.setStartLongitude(physicalMovement.getStartLongitude());
        physicalMovementDTO.setEndLatitude(physicalMovement.getEndLatitude());
        physicalMovementDTO.setEndLongitude(physicalMovement.getEndLongitude());
        physicalMovementDTO.setDuration(physicalMovement.getDuration());
        physicalMovementDTO.setDistance(physicalMovement.getDistance());
        physicalMovementDTO.setPace(physicalMovement.getPace());
        physicalMovementDTO.setStartTime(physicalMovement.getStartTime());
        physicalMovementDTO.setEndTime(physicalMovement.getEndTime());
        return physicalMovementDTO;
    }

    private PhysicalMovement mapToEntity(final PhysicalMovementDTO physicalMovementDTO, final PhysicalMovement physicalMovement) {
        physicalMovement.setActivityID(physicalMovementDTO.getActivityID());
        physicalMovement.setMovementLocationDetails(physicalMovementDTO.getMovementLocationDetails());
        physicalMovement.setStartLatitude(physicalMovementDTO.getStartLatitude());
        physicalMovement.setStartLongitude(physicalMovementDTO.getStartLongitude());
        physicalMovement.setEndLatitude(physicalMovementDTO.getEndLatitude());
        physicalMovement.setEndLongitude(physicalMovementDTO.getEndLongitude());
        physicalMovement.setDuration(physicalMovementDTO.getDuration());
        physicalMovement.setDistance(physicalMovementDTO.getDistance());
        physicalMovement.setPace(physicalMovementDTO.getPace());
        physicalMovement.setStartTime(physicalMovementDTO.getStartTime());
        physicalMovement.setEndTime(physicalMovementDTO.getEndTime());
        return physicalMovement;
    }

}
