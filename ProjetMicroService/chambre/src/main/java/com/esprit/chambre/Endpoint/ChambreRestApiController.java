package com.esprit.chambre.Endpoint;

import com.esprit.chambre.Entity.Chambre;
import com.esprit.chambre.Service.ChambreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chambres")
public class ChambreRestApiController {
    @Autowired
    private ChambreService chambreService;

    @GetMapping("/affichertout")
    List<Chambre> retrieveAllChambres(){
        return chambreService.retrieveAllChambres();
    }

    @PostMapping(path = "/ajouterchambre", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Chambre> createChambre(@RequestBody Chambre chambre) {
        return new ResponseEntity<>(chambreService.addChambre(chambre), HttpStatus.OK);
    }

    @PutMapping(path = "/updatechambre/{idChambre}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Chambre> updateChambre(@PathVariable(value = "idChambre") Long idChambre,
                                           @RequestBody Chambre chambre){
        return new ResponseEntity<>(chambreService.updateChambre(idChambre, chambre),
                HttpStatus.OK);
    }

    @DeleteMapping(value = "/deletechambre/{idChambre}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteChambre(@PathVariable(value = "idChambre") Long idChambre){
        return new ResponseEntity<>(chambreService.deleteChambre(idChambre), HttpStatus.OK);
    }
}
