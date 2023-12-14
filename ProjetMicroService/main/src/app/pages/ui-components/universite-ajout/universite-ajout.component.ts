import { UniversiteService } from 'src/app/services/universite.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Universite } from 'src/Models/Universite';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-universite-ajout',
  templateUrl: './universite-ajout.component.html',
  styleUrls: ['./universite-ajout.component.scss']
})
export class UniversiteAjoutComponent implements OnInit {

  myForm: FormGroup;
  id:number=0;

  constructor(private fb: FormBuilder, private univSer :UniversiteService , private ac : ActivatedRoute, private router : Router) {


  }

  ngOnInit() {
    this.id= this.ac.snapshot.params['id'];
    this.initForm();
  }


  getbuttonmessage(){
    return this.id !== undefined ? 'Update' : 'add';
  }

  onSubmit() {


    
    
    if (this.myForm.valid) {
      const formData: Universite = this.myForm.value; 
      console.log(formData);
      if (this.getbuttonmessage()== 'add'){
      
      this.univSer.ajouterUniversite(formData).subscribe(
        (response) => {
          console.log('Université ajoutée avec succès:', response);
          
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'université:', error);
          
        }
      );
      }
      else {
        this.univSer.UpdateUniversite(this.id,formData).subscribe({
          next:()=> this.router.navigate(['dashboard']),
        });
      }

    }
  }

  initForm() {
    this.myForm = this.fb.group({
      idUniversite: ['', [Validators.required]],
      nomUniversite: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
    });
  }

}
