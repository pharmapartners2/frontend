import { Component, OnInit } from '@angular/core';
import { PatientService } from "../services/patient.service";
import { Patient } from "../models/patient.model";
import { LoggingService } from '../services/logging.service';
import { Logging } from '../models/logging.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {
  private _patients: Patient[];
  private _logs: Logging[];

  constructor(private patientService : PatientService, private loggingService: LoggingService) {
    this._patients = Array<Patient>();
    this._logs = Array<Logging>();
  }

  ngOnInit(): void {
    this.patientService.getPatients()
    .subscribe(response => {
      this._patients = response;
      console.log("Lijst met patienten opgehaald: ", response)
    });
    // this.loggingService.registerLogging(new Logging());
  }

  get patients(): Patient[] {
    return this._patients;
  }
}
