import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PatientService} from "../services/patient.service";
import {Patient} from "../models/patient.model";
import { TokenService } from '../services/token.service';
import { LoggingService } from '../services/logging.service';
import { Logging } from '../models/logging.model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  private _patient: Patient;

  constructor(private patientService : PatientService, private route: ActivatedRoute, private tokenService: TokenService, private loggingService: LoggingService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('patientId'));
    this.loggingService.registerLogging(new Logging(this.tokenService.getIdfromToken(), "Patienten detail geopend", Date()));

    this.patientService.getPatient(idFromRoute)
      .subscribe(response => {
        this._patient = response;
        this.loggingService.registerLogging(new Logging(this.tokenService.getIdfromToken(), "Gegevens van patient " + this._patient.id + " opgehaald", Date()));
        console.log("Gegevens van patient opgehaald: ", response)
      });
  }

  get patient(): Patient {
    return this._patient;
  }
}
