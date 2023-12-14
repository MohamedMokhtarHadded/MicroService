import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3001/user';
  constructor(private http : HttpClient) { }

  signUp(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post<any>(`${this.baseUrl}/signup`, user);
  }

  signIn(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post<any>(`${this.baseUrl}/signin`, user);
  }


  

}




/*  ajouteruser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajouteruser`, userData);
  }

  loginuser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user, { responseType: 'text' });
  }

 
  getrolebyusername(username : any):Observable<String> {
    return this.http.get(`${this.baseUrl}/getroleforauth/`+username, { responseType: 'text' });
  } */
