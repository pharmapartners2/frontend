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
    this.isFiltered = false;
    //this.DateSelected = this.datepipe.transform(new Date(), 'dd/MM/yyyy');

  }
  DateSelected: any;
  isFiltered: boolean;

  dateFilter(){
    this._appointmentsFiltered = this._appointments.filter((Appointment, index) =>{
      //let date = this.datepipe.transform(Appointment.datum, 'yyyy-MM-dd')
/*      console.log(date + " date is geformat. Dit is de slected date " + this.DateSelected)
      if(date == this.DateSelected){
        console.log(Appointment.datum + " Datum van de Appointment gelijk aan " + this.DateSelected )
      }*/

      return Appointment.datum == this.DateSelected;
    });
  }
  FetchDateSelected(){
    /*if(!this.isFiltered){
      this.dateFilter();
      this.isFiltered = true;
      console.log(this._appointmentsFiltered+ "Should be full")

    } else {
      if(this.DateSelected.isEmpty()){
        this.DateSelected = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
      }
      console.log(this.DateSelected + " date selected")
      this.DateSelected = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
      console.log(this.DateSelected + " date selected")
      this._appointmentsFiltered = new Array<Appointment>();
      console.log(this._appointmentsFiltered+ "Should be empty")
      this.dateFilter();
      this.isFiltered = true;
      console.log(this._appointmentsFiltered+ "Should be filled")
    }*/
    this.dateFilter()
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
