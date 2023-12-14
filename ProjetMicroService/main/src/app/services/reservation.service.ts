import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from 'src/Models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`http://localhost:8090/reservation/getAll`);
  }

  validateReservation(reservationData: Reservation): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservation/validate`, reservationData);
  }

  ajouterReservation(roomNumber: number, userCin: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/reservation/add/${roomNumber}/${userCin}`, null);
  }

  deleteReservation(idReservation: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/reservation/delete?idReservation=${idReservation}`, { responseType: 'text' });
  }

  updateReservation(reservation: Reservation): Observable<any> {
    return this.http.put(`${this.baseUrl}/reservation/update`, reservation, { responseType: 'text' });
  }

  getReservationByid(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/reservation/getById?idReservation=${id}`);
  }

  validateReservationByid(idReservation: string): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.baseUrl}/reservation/validate?idReservation=${idReservation}`,
      {}
    );
  }

  refuseReservationByid(idReservation: string): Observable<Reservation> {
    return this.http.put<Reservation>(
      `${this.baseUrl}/reservation/refuse?idReservation=${idReservation}`,
      {}
    );
  }
}
