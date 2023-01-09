import { Component, OnInit, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PatientService } from "../services/patient.service";
import { Patient } from "../models/patient.model";
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  currentDateTime: string | null;
  private _patients: Patient[];

  constructor(
    public datepipe: DatePipe,
    private patientService: PatientService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService) {
      this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
      this._patients = Array<Patient>();
  }

  ngOnInit(): void {
    if (!this.tokenService.getToken() && Error('Unauthorized')) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }

    this.patientService.getPatients().subscribe((response) => {
      this._patients = response;
    });
  }

  get patients(): Patient[] {
    return this._patients;
  }

}
