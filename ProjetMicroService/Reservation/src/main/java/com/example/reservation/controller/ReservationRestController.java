package com.example.reservation.controller;


import com.example.reservation.entity.Reservation;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.reservation.service.IReservationService;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("reservation")
public class ReservationRestController {
    IReservationService ireservationservice;


    @GetMapping("/getAll")
    public List<Reservation> getAllReservations() {
        return ireservationservice.getAll();
    }

    @GetMapping("/getById")
    public Reservation getReservationById(@RequestParam("idReservation") String id) {
        return ireservationservice.getById(id);
    }

    @PostMapping("/add/{numChambre}/{cin}")
    public ResponseEntity<Reservation>
    ajouterReservationEtAssignerAChambreEtAEtudiant(
            @PathVariable("numChambre") long numChambre,
            @PathVariable("cin") long cin
    ) {
        return ResponseEntity.ok(ireservationservice.ajouterReservationEtAssignerAChambreEtAEtudiant(numChambre, cin));
    }

    @PutMapping("/update")
    public ResponseEntity<Reservation> update(@RequestBody Reservation reservation){
        return ResponseEntity.ok(ireservationservice.update(reservation));
    }

    @PutMapping("/validate")
    public ResponseEntity<Reservation> validate(@RequestParam("idReservation") String idReservation){
        return ResponseEntity.ok(ireservationservice.validate(idReservation));
    }

    @PutMapping("/refuse")
    public ResponseEntity<Reservation> refuse(@RequestParam("idReservation") String idReservation){
        return ResponseEntity.ok(ireservationservice.refuse(idReservation));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> annulerReservation(@RequestParam("idReservation") String idReservation){
        return ireservationservice.delete(idReservation);
    }

}
