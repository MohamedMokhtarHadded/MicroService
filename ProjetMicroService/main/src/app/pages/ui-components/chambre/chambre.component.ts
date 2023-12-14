import { Component , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Chambre } from 'src/Models/Chambre';
import { TypeChambre } from 'src/Models/TypeChambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.scss']
})
export class ChambreComponent implements OnInit{
  displayedColumns: string[] = ['identifiant chambre', 'numero de la chambre', 'type du chambre','actions'];
  dataSource: Chambre[] = [];
  filteredChambres: any[] = [];
  oldResults: any[] = [];
  chambreSearchTerms = new FormControl('');
  typeC !: any;

  constructor(private chambreService: ChambreService ,  private route : Router ){

  }

  ngOnInit(): void {
    this.chambreService.getChambres().subscribe(data =>{
      this.dataSource = data;
      this.oldResults= data;
      console.log(data)
    })
  }

  /*

  getEnumLabel(value: string): string {
    return TypeChambre[value as keyof typeof TypeChambre];
  } */


  /*
  deleteFoyer(idFoyer: number){
    if (confirm('Are you sure you want to delete this foyer?')) {
      this.foyerService.deleteFoyer(idFoyer).subscribe(
       {
        next : ()=> this.dataSource = this.dataSource.filter((u) => u.idFoyer !== idFoyer)
       }
      );
    }
  }  */


  /*
  updateChambre(id: number) {
    this.route.navigate(['ui-components/foyer-update-form', id]);
  }  */


  performSearch() {
    // Create a copy of the original reservations
    this.dataSource = [...this.oldResults];
    console.log("esprit - foyer".includes("esprit"));


    // Filter based on "numero chambre" and "nom bloc"
    if (this.chambreSearchTerms.value !== '') {
      console.log(this.chambreSearchTerms.value);
      let chambreSearchTerms = this.chambreSearchTerms.value;
      this.dataSource = this.oldResults.filter(chambre =>
        chambre.numeroChambre.toString() == chambreSearchTerms
      );
    }

    if (this.typeC !== '') {
      this.dataSource = this.oldResults.filter(chambre =>
        chambre.typeC.toLowerCase()==this.typeC.toLowerCase()
      );
    }

    this.typeC='';
    // Filter based on "capaciteBloc"
    // if (this.capaciteFoyer !== null) {
    //   this.dataSource = this.dataSource.filter(foyer =>
    //     foyer.capacite>=this.capaciteFoyer[0] && foyer.capacite<=this.capaciteFoyer[1] 
    //   );
    // }
    // this.capaciteFoyer=null;
  }

  setTypeChambre(typeChambre: any) {
    this.typeC = typeChambre;
  }

  modifierChambre(idChambre : number ){
    console.log(idChambre)
    this.route.navigate(['ui-components/chambre-form-update', idChambre]);
  }

  deleteChambre(idChambre : number){
    if (confirm('Are you sure you want to delete this chambre?')) {
      this.chambreService.deleteChambre(idChambre).subscribe(
        {
        next : ()=> this.dataSource = this.dataSource.filter((u) => u.idChambre !== idChambre),
        error:(err)=> {this.dataSource = this.dataSource.filter((u) => u.idChambre !== idChambre);
        console.log(err); }
        });
    }
  }

}
