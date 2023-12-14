import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { productsData } from '../../dashboard/dashboard.component';
import { Universite } from 'src/Models/Universite';
import { UniversiteService } from 'src/app/services/universite.service';
import { FormControl } from '@angular/forms';




  


@Component({
  selector: 'app-universite-data',
  templateUrl: './universite-data.component.html',
  styleUrls: ['./universite-data.component.scss']
})
export class UniversiteDataComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'nom universite', 'adresse', 'actions' , 'update'];
  dataSource : Universite[] = [];
  universiteSearchTerms = new FormControl('');
  oldResults: any[] = [];
  

  constructor(private univSer: UniversiteService , private router : Router ) {}


  navigateToUpdatePage(id: number): void {
    this.router.navigate(['ui-components/update', id]);
  }
  
  
  ngOnInit(): void {
  this.univSer.getUniversite().subscribe(data => {
    this.dataSource=data;
    this.oldResults=data;
    console.log(data);
  })
  }

  // Exemple de méthode pour naviguer vers la page d'édition avec un ID spécifié
  


  onDeleteButtonClick(id: number) {
    this.univSer.DeleteUniversite(id).subscribe(
      () => {
        
        this.dataSource = this.dataSource.filter((u) => u.id !== id);
      },
      (error: any) => {
        console.error('Error deleting universite:', error);
        
      }
    );
  }

  performSearch() {
    // Create a copy of the original reservations
    this.dataSource = [...this.oldResults];



    if (this.universiteSearchTerms.value !== '') {
      console.log(this.universiteSearchTerms.value);
      let universiteSearchTerms = this.universiteSearchTerms.value!.toLowerCase();
      this.dataSource = this.oldResults.filter(universite =>
        universite.nomUniversite.toLowerCase().includes(universiteSearchTerms.toString()
        ));
    }


  }


  sortByAdresse(boolean: boolean) {
    this.dataSource = this.dataSource.sort((a: any, b: any) => {
      if (a.adresse < b.adresse) {
        return -1;
      } else if (a.adresse > b.adresse) {
        return 1;
      } else {
        return 0;
      }
    });
  
    console.log(this.dataSource);
  
    if (!boolean) {
      this.dataSource = this.dataSource.reverse();
    }
  
    this.dataSource = [...this.dataSource]; // Create a new reference to trigger change detection
  }
  

  

}
