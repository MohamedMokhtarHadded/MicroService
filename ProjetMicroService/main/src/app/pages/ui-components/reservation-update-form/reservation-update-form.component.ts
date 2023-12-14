import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/Models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-update-form',
  templateUrl: './reservation-update-form.component.html',
  styleUrls: ['./reservation-update-form.component.scss']
})
export class ReservationUpdateFormComponent {

  reservationForm: FormGroup;
  idReservation: number;
  reservationDetails: any;

  constructor(private formBuilder: FormBuilder, private actroute: ActivatedRoute, private reservationService: ReservationService, private route: Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {

    this.actroute.params.subscribe(params => {
      this.idReservation = params['idReservation'];

      console.log(this.idReservation);

      this.reservationService.getReservationByid(this.idReservation).subscribe(data => {
        console.log(data);
        this.reservationDetails = data;
        this.fillReservationDetails(this.reservationDetails);
      });
    });



    this.reservationForm = this.formBuilder.group({
      idReservation: ['', Validators.required],
      anneUniversitaire: ['', Validators.required],
      estValide: ['', Validators.required],
      cinEtudiant: ['', Validators.required],
      numChambre: ['', Validators.required],
      statuReservation: ['', Validators.required]
    });

  }

  fillReservationDetails(reservation: Reservation) {
    this.reservationForm.patchValue({
      idReservation: reservation.idReservation,
      anneUniversitaire: reservation.anneUniversitaire,
      cinEtudiant: reservation.cinEtudiant,
      numChambre: reservation.numChambre,
      statuReservation: reservation.statuReservation
    })

  }

  onSubmit() {
    // this.reservationForm.value.idChambre = this.idReservation;
    console.log(this.reservationForm.value);
    this.reservationForm.value.estValide=true;

    this.reservationService.updateReservation(this.reservationForm.value).subscribe({
      next: () => {
        this.route.navigate(['/ui-components/reservation'])
        this.snackBar.open('Reservation updated', 'Close', { 
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
        
        ,error : error => {
          this.snackBar.open('cannot update Reservation', 'Close', { 
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
        }
    })
    console.log(this.reservationForm.value);

  }
}
