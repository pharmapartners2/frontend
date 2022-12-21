import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private loginUrl = 'http://localhost:8080/login';
  private url = 'http://localhost:8080/Patient';

  constructor(private http: HttpClient) {
    
   }

   getPatients() {
    return this.http.get(this.url)
   }

    
}
