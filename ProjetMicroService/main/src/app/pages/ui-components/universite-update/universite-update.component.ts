import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/Models/Universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-update',
  templateUrl: './universite-update.component.html',
  styleUrls: ['./universite-update.component.scss']
})
export class UniversiteUpdateComponent implements OnInit {

  dataSource : Universite;
  myForm: FormGroup;
  id:number;
  constructor(private fb: FormBuilder, private univSer :UniversiteService , private ac : ActivatedRoute, private router : Router) {


  }


  ngOnInit() {
    this.ac.params.subscribe(paramas=>{this.id=paramas['id']})
    console.log(this.id);
    this.initForm();
 this.univSer.fetchUniversiteByid(this.id).subscribe(
  (data)=>{
    this.remplissage(data)
    
  }
  )
  }


remplissage(universite: Universite){


this.myForm.patchValue({
  id:universite.id,
  nomUniversite:universite.nomUniversite,
  adresse:universite.adresse

})


}


onSubmit() {
  if (this.myForm.valid) {

    console.log(this.myForm.value);
    this.univSer.modifieruniversite(this.myForm.value).subscribe({
      next : ()=> this.router.navigate(['ui-components/universite'])
    })
    
    // Process the form submission or data here
    console.log(this.myForm.value);
    // For example: you might want to send this data to a service or backend endpoint
  } else {
    // Mark fields as touched to trigger validation messages
    this.myForm.markAllAsTouched();
  }
}

  initForm() {
    this.myForm = this.fb.group({
      id: ['', [Validators.required]],
      nomUniversite: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
    });
  }
}
