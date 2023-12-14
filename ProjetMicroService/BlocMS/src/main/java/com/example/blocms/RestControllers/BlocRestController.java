package com.example.blocms.RestControllers;

import com.example.blocms.entities.Bloc;
import com.example.blocms.services.BlocService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/bloc")
public class BlocRestController {
    @Autowired
    private BlocService blocService;

    @GetMapping("/blocs")
    public List<Bloc> retrieveBlocs() {
        return blocService.retrieveBlocs();
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Bloc> updateBloc(@PathVariable(value = "id") Long id, @RequestBody Bloc bloc){
        return new ResponseEntity<>(blocService.updateBloc(id,bloc),
                HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Bloc> createBloc(@RequestBody Bloc bloc) {
        return new ResponseEntity<>(blocService.addBloc(bloc), HttpStatus.OK);
    }


    @GetMapping("blocbyid/{id}")
    public Bloc retrieveBloc(@PathVariable(value = "id") long idBloc) {
        return  blocService.retrieveBloc(idBloc);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteBloc(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(blocService.deleteBloc(id), HttpStatus.OK);
    }
}
