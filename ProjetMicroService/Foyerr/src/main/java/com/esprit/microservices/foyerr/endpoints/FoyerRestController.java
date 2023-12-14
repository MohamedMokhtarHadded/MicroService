package com.esprit.microservices.foyerr.endpoints;

import com.esprit.microservices.foyerr.entities.Foyer;
import com.esprit.microservices.foyerr.services.FoyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/foyer")
public class FoyerRestController {

    @Autowired
    private FoyerService foyerService;

    @GetMapping(value = "/{id}" ,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Foyer> getFoyer(@PathVariable(value = "id") int id){
        Foyer f = foyerService.getFoyerById(id);
        return new ResponseEntity<>(f, HttpStatus.OK);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Foyer>> getAllFoyer() {
        List<Foyer> foyers = foyerService.displayAllFoyer();
        return new ResponseEntity<>(foyers, HttpStatus.OK);
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Foyer> addFoyer(@RequestBody Foyer foyer) {
        Foyer addedFoyer = foyerService.addFoyer(foyer);
        return new ResponseEntity<>(addedFoyer, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteFoyer(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(foyerService.deleteFoyer(id), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Foyer> updateFoyer(@PathVariable(value = "id") int id, @RequestBody Foyer foyer){
        return new ResponseEntity<>(foyerService.updateFoyer(id,foyer), HttpStatus.OK);
    }
}
