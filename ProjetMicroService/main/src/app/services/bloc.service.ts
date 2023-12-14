import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from 'src/Models/Bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getblocs() {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/blocs`);
  }

  
  deletebloc(idbloc: number) {
    return this.http.delete<any[]>(`${this.baseUrl}/bloc/${idbloc}`);
  }

  addBloc(bloc: Bloc) {
    return this.http.post<any[]>(`${this.baseUrl}/bloc`, bloc);
  }

  modifierBloc(bloc: Bloc) {
    return this.http.put<any[]>(`${this.baseUrl}/bloc`, bloc);
  }

  getblocbyid(idBloc: number) {
    return this.http.get<any[]>(`${this.baseUrl}/bloc/blocbyid/${idBloc}`);
  }
}
