import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';
import { Foyer } from 'src/Models/Foyer'

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.scss']
})
export class FoyerComponent implements OnInit {

  displayedColumns: string[] = ['identifiant foyer', 'nom du Foyer', 'capacite du foyer','Taux de capacité du foyer','Actions'];
  dataSource: Foyer[] = [];
  filteredFoyers: any[] = [];
  oldResults: any[] = [];
  FoyerSearchTerms = new FormControl('');
  capaciteFoyer !: any;

  constructor(private foyerService: FoyerService ,  private route : Router ){

  }

  ngOnInit(): void {
    this.foyerService.getFoyers().subscribe(data =>{
      this.dataSource = data;
      this.oldResults = data;
      console.log(data)
    })
  }

  deleteFoyer(idFoyer: number){
   
      this.foyerService.deleteFoyer(idFoyer).subscribe(
       {
        next : ()=> this.dataSource = this.dataSource.filter((u) => u.idFoyer !== idFoyer),
        error:(err)=> {this.dataSource = this.dataSource.filter((u) => u.idFoyer !== idFoyer);
        console.log(err); }
       }
      );
    
  }

  /*
  
  onDeleteButtonClick(id: number) {
    this.univSer.DeleteUniversite(id).subscribe(
      () => {
        
        this.dataSource = this.dataSource.filter((u) => u.id !== id);
      },
      (error: any) => {
        console.error('Error deleting universite:', error);
        
      }
    );
  }  */

  updateFoyer(id: number) {
    this.route.navigate(['ui-components/foyer-update-form', id]);
  }

  setCapacite(capacite:any){
    this.capaciteFoyer=capacite; 
  }


  

  performSearch() {
    // Create a copy of the original reservations
    this.dataSource = [...this.oldResults];
   
    // Filter based on nom foyer
    if (this.FoyerSearchTerms.value !== '') {
      console.log(this.FoyerSearchTerms.value);
      let foyerSearchTerm = this.FoyerSearchTerms.value!.toLowerCase();
      this.dataSource = this.oldResults.filter(foyer =>
        foyer.nomFoyer.toLowerCase().includes(foyerSearchTerm.toString()
        ));
    }

    // Filter based on "capaciteBloc"
    if (this.capaciteFoyer !== null) {
      this.dataSource = this.dataSource.filter(foyer =>
        foyer.capacite>=this.capaciteFoyer[0] && foyer.capacite<=this.capaciteFoyer[1] 
      );
    }
    this.capaciteFoyer=null;
  }

  
 

}
