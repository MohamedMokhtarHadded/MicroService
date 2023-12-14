import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/Models/Reservation'; // Ensure correct path
import { ReservationService } from 'src/app/services/reservation.service'; // Replace with your actual service
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  displayedColumns: string[] = ['identifiant reservation', 'annee universitaire', 'est valide', 'cin etudiant', 'numero de la chambre', 'statut reservation', 'actions'];
  dataSource: Reservation[] = [];
  filteredReservations: any[] = [];
  oldResults: any[] = [];
  reservationSearchTerms = new FormControl('');
  statuReservation!: any;

  constructor(private reservationService: ReservationService, private route: Router,private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(data => {
      console.log(data);
      this.dataSource = data;
      this.oldResults = data;
    });
  }

  performSearch() {
    // Create a copy of the original reservations
    this.dataSource = [...this.oldResults];

    // Filter based on "numero chambre"
    if (this.reservationSearchTerms.value !== '') {
      let reservationSearchTerms = this.reservationSearchTerms.value;
      this.dataSource = this.oldResults.filter(reservation =>
        reservation.numChambre.toString() === reservationSearchTerms
      );
    }

    // Filter based on "typeC"
    if (this.statuReservation !== '') {
      this.dataSource = this.oldResults.filter(reservation =>
        reservation.statuReservation.toLowerCase() === this.statuReservation.toLowerCase()
      );
    }

    this.statuReservation = '';
  }

  setTypeChambre(statuReservation: any) {
    this.statuReservation = statuReservation;
  }

  modifierReservation(idReservation: number) {
    console.log(idReservation);
    this.route.navigate(['ui-components/reservation-form', idReservation]);
  }

  deleteReservation(idReservation: string) {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.deleteReservation(idReservation).subscribe(
        {
          next: () => {
            this.dataSource = this.dataSource.filter((u) => u.idReservation !== idReservation)
            this.snackBar.open('Reservation deleted successfully', 'Close', { 
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
          }
            ,
          error: (err) => {
            this.dataSource = this.dataSource.filter((u) => u.idReservation !== idReservation);
            this.snackBar.open('cannot delete Reservation', 'Close', { 
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
            console.log(err);
          }
        });
    }
  }
}
