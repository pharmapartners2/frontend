import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Patient} from "../models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url = 'https://pharmapartnersapi.azurewebsites.net/';

  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getPatients() {
    return this.http.get<Array<Patient>>(this.url + 'patient', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
  getPatient(id: number) {
    return this.http.get<Patient>(this.url + 'patient/' + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
