import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/Models/Foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-update-form',
  templateUrl: './foyer-update-form.component.html',
  styleUrls: ['./foyer-update-form.component.scss']
})
export class FoyerUpdateFormComponent implements OnInit {
  foyerForm: FormGroup;
  idFoyer : number;
  foyerDetails: any;

  constructor(private formBuilder: FormBuilder , private actroute: ActivatedRoute , private foyerService : FoyerService ,private route : Router){}

  ngOnInit(): void {
   
    this.actroute.params.subscribe(params => {
      this.idFoyer = params['id']; // Récupération de l'ID du foyer depuis l'URL
      // Utilisez this.foyerId comme nécessaire dans votre composant pour mettre à jour le foyer spécifique.
    });

    this.foyerService.getFoyerDetail(this.idFoyer).subscribe((data: any) => {
      this.fillFoyerDetails( data); // Les détails du foyer sont stockés dans foyerDetails
      console.log(data); 
    });

    this.foyerForm = this.formBuilder.group({
      idFoyer: ['', Validators.required],
      nomFoyer: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]]
    });

    


    
  }

  fillFoyerDetails(foyer:Foyer){
    this.foyerForm.patchValue({
      
        idFoyer: foyer.idFoyer,
        nomFoyer: foyer.nomFoyer,
        capacite: foyer.capacite
    })
  }




    
  

  onSubmit() {
    if (this.foyerForm.valid) {

      console.log(this.foyerForm.value.idFoyer);
      this.foyerService.modifierFoyer(this.foyerForm.value.idFoyer,this.foyerForm.value).subscribe({
        next : ()=> this.route.navigate(['ui-components/foyer'])
      })
      
      // Process the form submission or data here
      console.log(this.foyerForm.value);
      // For example: you might want to send this data to a service or backend endpoint
    } else {
      // Mark fields as touched to trigger validation messages
      this.foyerForm.markAllAsTouched();
    }
  }


}
