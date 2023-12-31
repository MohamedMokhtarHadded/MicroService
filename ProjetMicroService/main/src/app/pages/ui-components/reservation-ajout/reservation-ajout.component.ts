import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/Models/Reservation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation-ajout',
  templateUrl: './reservation-ajout.component.html',
  styleUrls: ['./reservation-ajout.component.scss']
})
export class ReservationAjoutComponent implements OnInit {

  reservationForm: FormGroup;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.initForm();
  }

  getButtonMessage() {
    return this.id !== '' ? 'Update' : 'Add';
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const formData: Reservation = {
        idReservation: '', // Leave it empty as it will be generated by the server
        anneUniversitaire: '', // Assuming these fields are required in the model
        estValide: false, // Default value or adjust as needed
        cinEtudiant: this.reservationForm.value.cinEtudiant,
        numChambre: this.reservationForm.value.numChambre,
        statuReservation: '' // Assuming this field is required in the model
      };

      console.log(formData);

        this.reservationService.ajouterReservation(formData.numChambre,formData.cinEtudiant).subscribe(
          (response) => {
            this.snackBar.open('Reservation added', 'Close', { 
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
            this.router.navigate(['ui-components/reservation']);
          },
          (error) => {
            this.snackBar.open('could not add reservation', 'Close', { 
              duration: 3000,
              panelClass: ['mat-toolbar', 'mat-primary']
            });
            console.error('Error adding reservation:', error);
          }
        );
    }
  }

  initForm() {
    this.reservationForm = this.fb.group({
      cinEtudiant: ['', [Validators.required]],
      numChambre: ['', [Validators.required]],
    });
  }
}
