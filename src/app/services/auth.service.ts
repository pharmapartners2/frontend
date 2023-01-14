import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
     return this.http.post(environment.api + "login", {username:username, password:password}, {responseType: 'text'});
  }

  logout() {
    localStorage.removeItem('jwt');
  }

}
