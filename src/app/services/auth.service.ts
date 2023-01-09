import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/login';
  private lclhostUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
     return this.http.post(this.onlinehostUrl, {username:username, password:password}, {responseType: 'text'});
  }

  logout() {
    localStorage.removeItem('jwt');
  }

}
