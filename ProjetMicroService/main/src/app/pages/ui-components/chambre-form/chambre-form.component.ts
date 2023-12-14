import { ChambreService } from './../../../services/chambre.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chambre-form',
  templateUrl: './chambre-form.component.html',
  styleUrls: ['./chambre-form.component.scss']
})
export class ChambreFormComponent {

 chambreForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private ChambreService : ChambreService  , private route : Router){}

  ngOnInit(): void {
    this.chambreForm = this.formBuilder.group({
      idChambre: ['', Validators.required],
      numeroChambre: ['', Validators.required],
      typeC: ['', [Validators.required]]
    });

    
  }

  onSubmit(){
    if (this.chambreForm.valid) {
      // Process the form submission or data here
      console.log(this.chambreForm.value);
      this.ChambreService.addChambre(this.chambreForm.value).subscribe({
        next : ()=> this.route.navigate(['ui-components/chambre'])
      })
      

    } else {
      // Mark fields as touched to trigger validation messages
      this.chambreForm.markAllAsTouched();
    }

  }

}
