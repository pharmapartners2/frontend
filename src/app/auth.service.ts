import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(username:string, password:string ) {
     return this.http.post('http://localhost:8080/login', {username:username, password:password}, {responseType: 'text'});
  }
}
