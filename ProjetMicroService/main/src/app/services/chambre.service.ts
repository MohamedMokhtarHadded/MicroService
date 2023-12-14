import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from 'src/Models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl = 'http://localhost:8090';


  constructor(private http: HttpClient) { }

  getChambres() {
    return this.http.get<any[]>(`${this.baseUrl}/chambres/affichertout`);
  }

  getChambreDetail(idChambre: number) {
    return this.http.get<any[]>(`${this.baseUrl}/chambres/afficherchambre/${idChambre}`);
  }

  deleteChambre(idChambre: number) {
    return this.http.delete<any[]>(`${this.baseUrl}/chambres/deletechambre/${idChambre}`);
  }

  addChambre(chambre: Chambre) {
    return this.http.post<any[]>(`${this.baseUrl}/chambres/ajouterchambre`, chambre);
  }

  modifierChambre(idChambre: number, chambre: Chambre) {
    return this.http.put<any[]>(`${this.baseUrl}/chambres/updatechambre/${idChambre}`, chambre);
  }

  getChambreById(idChambre: number) {
    return this.http.get<Chambre>(`${this.baseUrl}/chambres/getChambreById/${idChambre}`);
  }
}
