import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-bloc-form',
  templateUrl: './bloc-form.component.html',
  styleUrls: ['./bloc-form.component.scss']
})
export class BlocFormComponent {

  
  blocForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private blocService : BlocService  , private route : Router){}

  ngOnInit(): void {
    this.blocForm = this.formBuilder.group({
      idBloc:  ['', Validators.required],
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', [Validators.required, Validators.min(1)]]
    });

    
  }

  onSubmit() {
    if (this.blocForm.valid) {
      // Process the form submission or data here
      console.log(this.blocForm.value);
      this.blocService.addBloc(this.blocForm.value).subscribe({
        next : ()=> this.route.navigate(['/ui-components/bloc'])
      })
      

    } else {
      // Mark fields as touched to trigger validation messages
      this.blocForm.markAllAsTouched();
    }
  }

}
