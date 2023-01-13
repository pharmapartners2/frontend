import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import { Appointment } from "../models/appointment.model";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getAppointments() {
    return this.http.get<Array<Appointment>>(environment.api + 'appointment', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
  getAppointmentByUser(Id:number) {
    return this.http.get<Array<Appointment>>(environment.api + 'appointment/' + Id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
