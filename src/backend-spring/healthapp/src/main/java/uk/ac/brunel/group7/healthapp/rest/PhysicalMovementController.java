package uk.ac.brunel.group7.healthapp.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.healthapp.model.PhysicalMovementDTO;
import uk.ac.brunel.group7.healthapp.service.PhysicalMovementService;


@RestController
@RequestMapping(value = "/api/physicalMovements", produces = MediaType.APPLICATION_JSON_VALUE)
public class PhysicalMovementController {

    private final PhysicalMovementService physicalMovementService;

    public PhysicalMovementController(final PhysicalMovementService physicalMovementService) {
        this.physicalMovementService = physicalMovementService;
    }

    @GetMapping
    public List<PhysicalMovementDTO> getAllPhysicalMovements() {
        return physicalMovementService.findAll();
    }

    @GetMapping("/{id}")
    public PhysicalMovementDTO getPhysicalMovement(@PathVariable final Long id) {
        return physicalMovementService.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createPhysicalMovement(@RequestBody @Valid final PhysicalMovementDTO physicalMovementDTO) {
        return physicalMovementService.create(physicalMovementDTO);
    }

    @PutMapping("/{id}")
    public void updatePhysicalMovement(@PathVariable final Long id, @RequestBody @Valid final PhysicalMovementDTO physicalMovementDTO) {
        physicalMovementService.update(id, physicalMovementDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePhysicalMovement(@PathVariable final Long id) {
        physicalMovementService.delete(id);
    }

}
