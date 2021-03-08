package uk.ac.brunel.group7.fitify.service;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import uk.ac.brunel.group7.fitify.domain.Water;
import uk.ac.brunel.group7.fitify.model.WaterDTO;
import uk.ac.brunel.group7.fitify.repos.WaterRepository;


@Service
public class WaterService {

    private final WaterRepository waterRepository;

    public WaterService(final WaterRepository waterRepository) {
        this.waterRepository = waterRepository;
    }

    public List<WaterDTO> findAll() {
        return waterRepository.findAll()
                .stream()
                .map(water -> mapToDTO(water, new WaterDTO()))
                .collect(Collectors.toList());
    }

    public WaterDTO get(final Long waterID) {
        return waterRepository.findById(waterID)
                .map(water -> mapToDTO(water, new WaterDTO()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Long create(final WaterDTO waterDTO) {
        final Water water = new Water();
        mapToEntity(waterDTO, water);
        return waterRepository.save(water).getWaterID();
    }

    public void update(final Long waterID, final WaterDTO waterDTO) {
        final Water water = waterRepository.findById(waterID)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        mapToEntity(waterDTO, water);
        waterRepository.save(water);
    }

    public void delete(final Long waterID) {
        waterRepository.deleteById(waterID);
    }

    private WaterDTO mapToDTO(final Water water, final WaterDTO waterDTO) {
        waterDTO.setWaterID(water.getWaterID());
        waterDTO.setActivityID(water.getActivityID());
        waterDTO.setLitres(water.getLitres());
        return waterDTO;
    }

    private Water mapToEntity(final WaterDTO waterDTO, final Water water) {
        water.setActivityID(waterDTO.getActivityID());
        water.setLitres(waterDTO.getLitres());
        return water;
    }

}
