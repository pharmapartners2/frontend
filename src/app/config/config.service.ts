import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private loginUrl = 'http://localhost:8080/login';
  private url = 'http://localhost:8080/Patient';
  localStorage: any;

  constructor(private http: HttpClient) {

   }

   getToken(): any {
    const token = localStorage.getItem('token33');
    return token;
   }

   getPatients() {
    return this.http.get(this.url, {headers: {'Authorization': `Bearer ${this.getToken()}`}});
   }
   getPatient(id: number) {
    return this.http.get(this.url + '/' + id, {headers: {'Authorization': `Bearer ${this.getToken()}`}});
   }


}
