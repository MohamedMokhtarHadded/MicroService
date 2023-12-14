import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
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

   
    const formData: User = this.myForm.value; 
    console.log(formData);
    const { email, password } = this.myForm.value;

    this.userSer.signIn(email, password).subscribe(
      response => {
        // Rediriger l'utilisateur vers une autre page ou effectuer une autre action réussie
        this.router.navigate(['/ui-components']);
      },
      error => {
        // Afficher un message d'erreur approprié
        console.error(error);
        alert('Erreur lors de la connexion. Veuillez vérifier vos identifiants.');
      }
    );
  
   
  }



      /*

      data => {
        
        alert("Login successful");
          this.userSer.getrolebyusername(formData.username)
    .subscribe({
      next: (role) => {
        
        console.log(role);
      }
      
    });
  
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error("Login error", error);
        alert("Login failed");
      }
    );*/

  


}
