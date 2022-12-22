import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private lclhostUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
     return this.http.post(this.lclhostUrl, {username:username, password:password}, {responseType: 'text'});
  }
}
