package uk.ac.brunel.group7.healthapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import uk.ac.brunel.group7.healthapp.config.CustomNotFoundException;
import uk.ac.brunel.group7.healthapp.domain.PhysicalMovement;
import uk.ac.brunel.group7.healthapp.model.PhysicalMovementDTO;
import uk.ac.brunel.group7.healthapp.repos.PhysicalMovementRepository;


@Service
public class PhysicalMovementService {

    private final PhysicalMovementRepository physicalMovementRepository;

    @Autowired
    public PhysicalMovementService(final PhysicalMovementRepository physicalMovementRepository) {
        this.physicalMovementRepository = physicalMovementRepository;
    }

    public List<PhysicalMovementDTO> findAll() {
        return physicalMovementRepository.findAll()
                .stream()
                .map(physicalMovement -> mapToDTO(physicalMovement, new PhysicalMovementDTO()))
                .collect(Collectors.toList());
    }

    public PhysicalMovementDTO get(final Long id) {
        return physicalMovementRepository.findById(id)
                .map(physicalMovement -> mapToDTO(physicalMovement, new PhysicalMovementDTO()))
                .orElseThrow(CustomNotFoundException::new);
    }

    public Long create(final PhysicalMovementDTO physicalMovementDTO) {
        final PhysicalMovement physicalMovement = new PhysicalMovement();
        mapToEntity(physicalMovementDTO, physicalMovement);
        return physicalMovementRepository.save(physicalMovement).getId();
    }

    public void update(final Long id, final PhysicalMovementDTO physicalMovementDTO) {
        final PhysicalMovement physicalMovement = physicalMovementRepository.findById(id)
                .orElseThrow(CustomNotFoundException::new);
        mapToEntity(physicalMovementDTO, physicalMovement);
        physicalMovementRepository.save(physicalMovement);
    }

    public void delete(final Long id) {
        physicalMovementRepository.deleteById(id);
    }

    private PhysicalMovementDTO mapToDTO(final PhysicalMovement physicalMovement, final PhysicalMovementDTO physicalMovementDTO) {
        physicalMovementDTO.setId(physicalMovement.getId());
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
