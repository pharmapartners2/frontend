import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Patient} from "../models/patient.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getPatients() {
    return this.http.get<Array<Patient>>(environment.api+ 'patient', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
  getPatient(id: number) {
    return this.http.get<Patient>(environment.api + 'patient/' + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
