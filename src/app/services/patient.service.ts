import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Patient} from "../models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
  private lclhostUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getPatients() {
    return this.http.get<Array<Patient>>(this.lclhostUrl + 'patient', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
  getPatient(id: number) {
    return this.http.get<Patient>(this.lclhostUrl + 'patient/' + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
