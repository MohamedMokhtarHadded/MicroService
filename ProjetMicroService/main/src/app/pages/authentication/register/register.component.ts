import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent implements OnInit {


  myForm: FormGroup;

  constructor(private router: Router , private fb:FormBuilder, private userSer: UserService, private ac : ActivatedRoute) {}
  ngOnInit(): void {
   this.initForm();
  }

  

  initForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
    });
  }


  


  onSubmit(){
    if (this.myForm.invalid) {
      return;
    }
  
    const { email, password } = this.myForm.value;
  
    this.userSer.signUp(email, password).subscribe(
      response => {
        // Rediriger l'utilisateur vers une autre page ou effectuer une autre action réussie
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Afficher un message d'erreur approprié
        console.error(error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer plus tard.');
      }
    );


  }




  

  //submit() {
    // console.log(this.form.value);
    //this.router.navigate(['/dashboard']);
  //}
}
