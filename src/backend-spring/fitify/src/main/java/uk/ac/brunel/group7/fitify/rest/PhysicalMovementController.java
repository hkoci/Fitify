package uk.ac.brunel.group7.fitify.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import uk.ac.brunel.group7.fitify.model.PhysicalMovementDTO;
import uk.ac.brunel.group7.fitify.service.PhysicalMovementService;


@RestController
@RequestMapping(value = "/api/activities/physical", produces = MediaType.APPLICATION_JSON_VALUE)
public class PhysicalMovementController {

    private final PhysicalMovementService physicalMovementService;

    public PhysicalMovementController(final PhysicalMovementService physicalMovementService) {
        this.physicalMovementService = physicalMovementService;
    }

    @GetMapping
    public List<PhysicalMovementDTO> getAllPhysicalMovements() {
        return physicalMovementService.findAll();
    }

    @GetMapping("/{acitivityMovementID}")
    public PhysicalMovementDTO getPhysicalMovement(@PathVariable final Long acitivityMovementID) {
        return physicalMovementService.get(acitivityMovementID);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Long createPhysicalMovement(@RequestBody @Valid final PhysicalMovementDTO physicalMovementDTO) {
        return physicalMovementService.create(physicalMovementDTO);
    }

    @PutMapping("/{acitivityMovementID}")
    public void updatePhysicalMovement(@PathVariable final Long acitivityMovementID, @RequestBody @Valid final PhysicalMovementDTO physicalMovementDTO) {
        physicalMovementService.update(acitivityMovementID, physicalMovementDTO);
    }

    @DeleteMapping("/{acitivityMovementID}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePhysicalMovement(@PathVariable final Long acitivityMovementID) {
        physicalMovementService.delete(acitivityMovementID);
    }

}
