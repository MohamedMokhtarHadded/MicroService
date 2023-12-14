import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Bloc } from 'src/Models/Bloc';
import { BlocService } from 'src/app/services/bloc.service';
@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent {

  displayedColumns: string[] = [ 'idBloc','nom du bloc', 'capacite du bloc','Actions'];
  dataSource: Bloc[] = [];
  BlocSearchTerms = new FormControl('');
  oldResults: any[] = [];
  capaciteBloc !: any;

  constructor(private serviceBloc: BlocService ,  private route : Router ){

  }

  ngOnInit(): void {
    this.serviceBloc.getblocs().subscribe({
      next:(data)=> this.dataSource = data
    })
  }

  deleteBloc(idBloc: number){
    if (confirm('Are you sure you want to delete this bloc ?')) {
      this.serviceBloc.deletebloc(idBloc).subscribe(
       {
        next : ()=> this.dataSource = this.dataSource.filter((u) => u.idBloc !== idBloc),
        error : (err)=> this.dataSource = this.dataSource.filter((u) => u.idBloc !== idBloc),
       },
      );
    }
  }

  updateBloc(idBloc: number) {
    this.route.navigate(['/ui-components/bloc-form-update', idBloc]);
  }

  performSearch() {
  // Create a copy of the original data if it doesn't exist
  if (!this.oldResults.length) {
    this.oldResults = [...this.dataSource];
  }

  // Filter based on "nom bloc"
  const searchTerm = this.BlocSearchTerms.value?.toLowerCase().trim();
  if (searchTerm) {
    this.dataSource = this.oldResults.filter(bloc =>
      bloc.nomBloc.toLowerCase().includes(searchTerm)
    );
  } else {
    // If search term is empty, reset to display all data
    this.dataSource = [...this.oldResults];
  }

   // Filter based on "capaciteBloc"
   if (this.capaciteBloc !== null) {
    this.dataSource = this.dataSource.filter(bloc =>
      bloc.capaciteBloc>=this.capaciteBloc[0] && bloc.capaciteBloc<=this.capaciteBloc[1] 
    );
  }
  this.capaciteBloc=null;
}

setCapacite(capacite:any){
  this.capaciteBloc=capacite; 
}


}
