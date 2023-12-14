import { Universite } from 'src/Models/Universite';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http : HttpClient) { }

  getUniversite() {
    return this.http.get<any[]>(`${this.baseUrl}/universite/afficheUniv`);
  }

  ajouterUniversite(universiteData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/universite/SaveUniv`, universiteData);
  }

  DeleteUniversite(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/universite/DeleteUniv/` + id, { responseType: 'text' });
  }

// 
  UpdateUniversite(id:number, body:Universite){
    return this.http.put(this.baseUrl+id, body);
  }


  modifieruniversite(universite  : Universite){
    return this.http.put<any[]>(`${this.baseUrl}/universite/ModifUniv`,universite);
}


  fetchUniversiteByid(id:number){
    return this.http.get(`${this.baseUrl}/universite/afficheuniversite/` + id);
  }

  
}
