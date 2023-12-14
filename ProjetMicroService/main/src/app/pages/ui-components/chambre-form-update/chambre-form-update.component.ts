import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/Models/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-form-update',
  templateUrl: './chambre-form-update.component.html',
  styleUrls: ['./chambre-form-update.component.scss']
})
export class ChambreFormUpdateComponent {

  chambreForm: FormGroup;
  idChambre: number;
  chambreDetails: any;

  constructor(private formBuilder: FormBuilder, private actroute: ActivatedRoute, private chambreService: ChambreService, private route: Router) { }

  ngOnInit(): void {

    this.actroute.params.subscribe(params => {
      this.idChambre = params['id'];
      console.log(this.idChambre);
    });

    this.chambreService.getChambreById(this.idChambre).subscribe({
      next: (data: any) => {
        console.log(data);
        this.fillChambreDetails(data); // Les détails du foyer sont stockés dans foyerDetails
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.chambreForm = this.formBuilder.group({

      numeroChambre: ['', Validators.required],
      typeC: ['', [Validators.required, Validators.min(1)]]
    });

  }

  fillChambreDetails(chambre: Chambre) {
    this.chambreForm.patchValue({
      idChambre: chambre.idChambre,
      numeroChambre: chambre.numeroChambre,
      typeC: chambre.typeC
    })

  }

  onSubmit() {
    if (this.chambreForm.valid) {
      this.chambreForm.value.idChambre = this.idChambre;
      console.log(this.chambreForm.value);
      this.chambreService.modifierChambre(this.chambreForm.value.idChambre, this.chambreForm.value).subscribe({
        next: () => this.route.navigate(['/ui-components/chambre'])
      })

      // Process the form submission or data here
      console.log(this.chambreForm.value);
      // For example: you might want to send this data to a service or backend endpoint
    } else {
      // Mark fields as touched to trigger validation messages
      this.chambreForm.markAllAsTouched();
    }
  }


}
