import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import { Appointment } from "../models/appointment.model";
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
  private lclhostUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getAppointments() {
    return this.http.get<Array<Appointment>>(this.onlinehostUrl + 'appointment', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
  getAppointmentByUser(Id:number) {
    return this.http.get<Array<Appointment>>(this.onlinehostUrl + 'appointment/' + Id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
