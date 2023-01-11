import { Component, OnInit, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentService } from "../services/appointment.service";
import { Patient } from "../models/patient.model";
import { UserService } from "../services/user.service"
import { User } from "../models/user.model"
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';
import { Appointment } from '../models/appointment.model';
import { PatientService } from '../services/patient.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  currentDateTime: string | null;
  private _appointments: Appointment[];
  private _appointmentsFiltered: Appointment[];
  private _users: User[];
  private _patients: Patient[];

  constructor(
    public datepipe: DatePipe,
    private appointmentService: AppointmentService,
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService,
    private patientService: PatientService) {
      this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
      this._appointments = Array<Appointment>();
      this._appointmentsFiltered = Array<Appointment>();
      this._users = Array<User>();
      this._patients = Array<Patient>();
  }

  ngOnInit(): void {
    if (!this.tokenService.isValidToken()) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
    this.patientService.getPatients().subscribe((response) => {
      this._patients = response;
      console.log("Patiënten opgehaald: ", response)
    });
    this.appointmentService.getAppointments().subscribe((response) => {
      this._appointments = response;
      console.log("Afspraken opgehaald: ", response)
    });

    this.userService.getUsers().subscribe((response) => {
      this._users = response;
      console.log("Users opgehaald: ", response)
    })
    this.DateSelected = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
    this._appointmentsFiltered = this._appointments.filter((appointment : Appointment) => appointment.datum == this.DateSelected);
  }
  DateSelected: any;
  FetchDateSelected(){
    console.log("date selected by user ---" +  this.DateSelected)
    this.datepipe.transform(this.DateSelected, 'dd/MM/yyyy')
    //this._appointments.filter(s => s.datum == this.DateSelected);
  }

  get appointments(): Appointment[]{
    return this._appointments;
  }
  
  get patients(): Patient[] {
    return this._patients;
  }

  get users(): User[] {
    return this._users;
  }

}
