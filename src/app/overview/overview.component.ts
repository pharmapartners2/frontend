import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
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
  }

  ngOnInit(): void {
    if (!this.tokenService.isValidToken()) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
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

    this.userService.getUsers().subscribe((response) => {
      this._users = response;
      console.log('Users opgehaald: ', response);
    });

    this._loggedInAs = this.tokenService.getUsernamefromToken();
    this.userFromDropdown = this.tokenService.getIdfromToken();

    console.log('Logged in as: ', this._loggedInAs);

    this.isFiltered = false;
  }

  isFiltered: boolean;

  userFilter() {
    this.userId = document.getElementById('selectUser');
    console.log(parseInt(this.userId.value));
    this._appointmentsFiltered = [];
    this._appointments.forEach((Appointment) => {
      console.log("item: "+ Appointment.patientModel)
      if (Appointment.userid == parseInt(this.userId.value)) {
        this._appointmentsFiltered.push(Appointment);
      }
    });
    console.log(this._appointmentsFiltered);
  }
  dateFilter() {
    this._appointmentsFiltered = [];
    this._appointments.forEach((appointment) => {
      let AppointmentDate = new Date(appointment.datum);
      let todayDate = new Date(this.todayDate);
      if (
        AppointmentDate.getDate() == todayDate.getDate() &&
        AppointmentDate.getMonth() == todayDate.getMonth() &&
        AppointmentDate.getFullYear() == todayDate.getFullYear()
      ) {
        this._appointmentsFiltered.push(appointment);
      }
    });
    if (this._appointmentsFiltered.length > 0) {
      this.isFiltered = true;
      console.log(
        this.isFiltered + ' Deze hele lieve code zou TRUE moeten geven'
      );
    } else {
      this._appointmentsFiltered = [];
      this.isFiltered = true;
    }
  }

  FetchDateSelected() {
    if (this.todayDate == undefined || this.todayDate.toString() == '') {
      console.log('Deze lieve code is undefined ---' + this.todayDate + '---');
      this._appointmentsFiltered = this._appointments.map((a) => {
        return a;
      });
      this.isFiltered = false;
      console.log(
        this.isFiltered + ' Deze hele lieve code zou false moeten geven'
      );
    } else {
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
}
