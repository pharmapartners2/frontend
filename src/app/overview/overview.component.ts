import { Component, OnInit, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PatientService } from "../services/patient.service";
import { Patient } from "../models/patient.model";
import { UserService } from "../services/user.service"
import { User } from "../models/user.model"
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  currentDateTime: string | null;
  private _patients: Patient[];
  private _users: User[];

  constructor(
    public datepipe: DatePipe,
    private patientService: PatientService,
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService) {
      this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
      this._patients = Array<Patient>();
      this._users = Array<User>();
  }

  ngOnInit(): void {
    if (this.tokenService.isValidToken()==false) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    this.patientService.getPatients().subscribe((response) => {
      this._patients = response;
      console.log("Patienten opgehaald: ", response)
    });

    this.userService.getUsers().subscribe((response) => {
      this._users = response;
      console.log("Users opgehaald: ", response)
    })
  }

  get patients(): Patient[] {
    return this._patients;
  }

  get users(): User[] {
    return this._users;
  }

}
