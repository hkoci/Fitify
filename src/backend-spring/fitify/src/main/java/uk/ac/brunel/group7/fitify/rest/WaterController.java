package uk.ac.brunel.group7.fitify.rest;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.ac.brunel.group7.fitify.model.WaterDTO;
import uk.ac.brunel.group7.fitify.service.WaterService;


@RestController
@RequestMapping(value = "/api/activities/water", produces = MediaType.APPLICATION_JSON_VALUE)
public class WaterController {

    private final WaterService waterService;

    public WaterController(final WaterService waterService) {
        this.waterService = waterService;
    }

    @GetMapping
    public ResponseEntity<List<WaterDTO>> getAllWaters() {
        return ResponseEntity.ok(waterService.findAll());
    }

    @GetMapping("/{waterID}")
    public ResponseEntity<WaterDTO> getWater(@PathVariable final Long waterID) {
        return ResponseEntity.ok(waterService.get(waterID));
    }

    @PostMapping
    public ResponseEntity<Long> createWater(@RequestBody @Valid final WaterDTO waterDTO) {
        return new ResponseEntity<>(waterService.create(waterDTO), HttpStatus.CREATED);
    }

    @PutMapping("/{waterID}")
    public ResponseEntity<Void> updateWater(@PathVariable final Long waterID,
            @RequestBody @Valid final WaterDTO waterDTO) {
        waterService.update(waterID, waterDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{waterID}")
    public ResponseEntity<Void> deleteWater(@PathVariable final Long waterID) {
        waterService.delete(waterID);
        return ResponseEntity.noContent().build();
    }

}
