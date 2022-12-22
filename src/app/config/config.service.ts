import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private lclhostPatientUrl = 'http://localhost:8080/Patient';
  private onlinePatientUrl = 'https://pharmapartnersapi.azurewebsites.net/patient';
  localStorage: any;

  constructor(private http: HttpClient) {

   }

   getToken(): any {
    const token = localStorage.getItem('token33');
    return token;
   }

   getPatients() {
    return this.http.get(this.lclhostPatientUrl, {headers: {'Authorization': `Bearer ${this.getToken()}`}});
   }
   getPatient(id: number) {
    return this.http.get(this.lclhostPatientUrl + '/' + id, {headers: {'Authorization': `Bearer ${this.getToken()}`}});
   }
  
}
