import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentService } from '../services/appointment.service';
import { Patient } from '../models/patient.model';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Appointment } from '../models/appointment.model';
import { PatientService } from '../services/patient.service';
import {FooterService} from "../services/footer.service";
import {NavbarService} from "../services/navbar.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  currentDateTime: string | null;
  todayDate: Date;
  private _appointments: Appointment[];
  private _appointmentsFiltered: Appointment[];
  private _users: User[];
  private _patients: Patient[];
  private _appointmentsByUser: Appointment[];
  private _appointmentsByUserFiltered: Appointment[];
  _loggedInAs: any | null;
  userFromDropdownUsername: string;
  userFromDropdown: number;
  userId: any | null;

  constructor(
    public datepipe: DatePipe,
    private appointmentService: AppointmentService,
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService,
    private patientService: PatientService

  ) {
    this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
    this._appointments = Array<Appointment>();
    this._appointmentsFiltered = Array<Appointment>();
    this._users = Array<User>();
    this._patients = Array<Patient>();
    this._loggedInAs = '';
    this._appointmentsByUser = Array<Appointment>();
    this._appointmentsByUserFiltered = Array<Appointment>();
  }
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((response) => {
      this._patients = response;
      console.log('Patiënten opgehaald: ', response);
    });

    this.appointmentService
      .getAppointmentByUser(this.tokenService.getIdfromToken())
      .subscribe((response) => {
        this._appointments = response;
        console.log(
          'Afspraken opgehaald: ',
          response,
          'met het id: ',
          this.tokenService.getIdfromToken()
        );
      });

      this.appointmentService
      .getAppointments()
      .subscribe((response) => {
        this._appointmentsByUser = response;
        console.log(
          'Afspraken opgehaald by user: ',
          response,
        );
      });

    this.userService.getUsers().subscribe((response) => {
      this._users = response;
      console.log('Users opgehaald: ', response);
    });

    this._loggedInAs = this.tokenService.getUsernamefromToken();
    this.userFromDropdown = this.tokenService.getIdfromToken();

    console.log('Logged in as: ', this._loggedInAs);
    this.isLoaded = false;

  }
  isLoaded: boolean;
  isFiltered: boolean;

  userFilter() {
    this.userId = document.getElementById('selectUser');
    console.log(parseInt(this.userId.value));
    this._appointmentsFiltered = [];
    this._appointmentsByUser.forEach((appointment) => {
      if (appointment.userId == parseInt(this.userId.value)) {
        this._appointmentsFiltered.push(appointment);
      }
    });
    console.log(this._appointmentsFiltered);
  }

  dateFilter() {
    this._appointmentsByUserFiltered = [];
    this._appointmentsFiltered.forEach((appointment) => {
      let AppointmentDate = new Date(appointment.datum);
      let todayDate = new Date(this.todayDate);
      if (
        AppointmentDate.getDate() == todayDate.getDate() &&
        AppointmentDate.getMonth() == todayDate.getMonth() &&
        AppointmentDate.getFullYear() == todayDate.getFullYear()
      ) {
        this._appointmentsByUserFiltered.push(appointment);
      }
    });
    if (this._appointmentsByUserFiltered.length > 0) {
      this.isFiltered = true;
      console.log(
        this.isFiltered + ' Deze hele lieve code zou TRUE moeten geven'
      );
    } else {
      this._appointmentsFiltered = [];
      this.isFiltered = false;
    }
  }

  FetchDateSelected() {
    this.isLoaded =true;
    if (this.todayDate == undefined || this.todayDate.toString() == '') {
      console.log('Deze lieve code is undefined ---' + this.todayDate + '---');
      this.userFilter();
      this._appointmentsByUserFiltered = this._appointments.map((a) => {
        return a;
      });
      this.isFiltered = false;
      console.log(
        this.isFiltered + ' Deze hele lieve code zou false moeten geven'
      );
    } else {

      this.userFilter();
      this.dateFilter();
    }
  }

  get appointments(): Appointment[] {
    return this._appointments;
  }

  get loggedInas(): string {
    return this._loggedInAs;
  }

  get patients(): Patient[] {
    return this._patients;
  }

  get users(): User[] {
    return this._users;
  }

  get appointmentsFiltered(): Appointment[] {
    return this._appointmentsFiltered;
  }
  get appointmentsByUserFiltered(): Appointment[] {
    return this._appointmentsByUserFiltered;
  }
}
