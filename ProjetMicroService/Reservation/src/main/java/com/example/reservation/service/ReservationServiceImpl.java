package com.example.reservation.service;


import com.example.reservation.entity.Reservation;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.reservation.repository.ReservationRepo;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor

public class ReservationServiceImpl implements IReservationService {

    ReservationRepo resRepo;


    @Override
    public Reservation add(Reservation reservation) {
        return resRepo.save(reservation);
    }

    @Override
    public Reservation ajouterReservationEtAssignerAChambreEtAEtudiant(
            long numChambre,
            long cin
    ) {

        Reservation reservation = new Reservation();

        reservation.setIdReservation(
                LocalDate.now().getYear() + "/" +
                        (LocalDate.now().getYear() + 1) + "-"
                        + numChambre + "-"
                        + cin
        );

            reservation.setCinEtudiant(cin);
            reservation.setNumChambre(numChambre);
            reservation.setEstValide(true);
            reservation.setAnneUniversitaire(LocalDate.now());
            reservation.setStatuReservation("en-cours");
            resRepo.save(reservation);

        return resRepo.findById(reservation.getIdReservation()).orElse(null);

    }


    @Override
    public List<Reservation> getAll() {
        return resRepo.findAll();
    }

    @Override
    public Reservation getById(String id) {
        return resRepo.findById(id).orElse(null);
    }


    @Override
    public ResponseEntity<String> annulerReservation(String idReservation) {
        try {
            Reservation reservation = resRepo.findById(idReservation).orElse(null);
            reservation.setStatuReservation("annuler");
            reservation.setEstValide(false);
            resRepo.save(reservation);
            return ResponseEntity.ok().body("reservation annuler");
        } catch (NullPointerException ex) {
            throw new RuntimeException("reservation not found");
        }

    }


    @Override
    public Reservation validate(String idRes) {
        Reservation reservation = resRepo.findById(idRes).orElse(null);
        reservation.setStatuReservation("valide");
        return resRepo.save(reservation);
    }

    @Override
    public Reservation refuse(String idRes) {
        Reservation reservation = resRepo.findById(idRes).orElse(null);
        reservation.setStatuReservation("refuse");
        return resRepo.save(reservation);
    }

    @Override
    public Reservation update(Reservation reservation) {
        return resRepo.save(reservation);
    }

    @Override
    public ResponseEntity<String> delete(String idReservation) {
        try {
            resRepo.deleteById(idReservation);
            return ResponseEntity.ok().body("reservation supprimer");
        } catch (NullPointerException ex) {
            throw new RuntimeException("reservation not found");
        }
    }
}
