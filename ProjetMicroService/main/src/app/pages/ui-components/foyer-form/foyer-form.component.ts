import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-form',
  templateUrl: './foyer-form.component.html',
  styleUrls: ['./foyer-form.component.scss']
})
export class FoyerFormComponent implements OnInit{

  foyerForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private foyerService : FoyerService  , private route : Router){}

  ngOnInit(): void {
    this.foyerForm = this.formBuilder.group({
      idFoyer: ['', Validators.required],
      nomFoyer: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]]
    });

    
  }

  onSubmit() {
    if (this.foyerForm.valid) {
      // Process the form submission or data here
      console.log(this.foyerForm.value);
      this.foyerService.addFoyer(this.foyerForm.value).subscribe({
        next : ()=> this.route.navigate(['ui-components/foyer']),
        error : (err)=> console.log(err)
      })
      

    } else {
      // Mark fields as touched to trigger validation messages
      this.foyerForm.markAllAsTouched();
    }
  }

}
