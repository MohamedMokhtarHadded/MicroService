package com.example.reservation.service;



import com.example.reservation.entity.Reservation;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.List;

public interface IReservationService {


    Reservation add(Reservation reservation);
    Reservation ajouterReservationEtAssignerAChambreEtAEtudiant(long numChambre, long cin);

    List<Reservation> getAll();
    Reservation getById(String id);
    Reservation validate(String idRes);
    Reservation refuse(String idRes);

    Reservation update(Reservation reservation);

    ResponseEntity<String> annulerReservation(String idReservation);

    ResponseEntity<String> delete(String idReservation);
}
