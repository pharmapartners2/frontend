import { Component, OnInit } from '@angular/core';
import {PatientService} from "../services/patient.service";
import {Patient} from "../models/patient.model";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {
  private _patients: Patient[];

  constructor(private patientService : PatientService) {
    this._patients = Array<Patient>();
  }

  ngOnInit(): void {
    this.patientService.getPatients()
    .subscribe(response => {
      this._patients = response;
      console.log("Lijst met patienten opgehaald: ", response)
    });
  }

  get patients(): Patient[] {
    return this._patients;
  }
}
