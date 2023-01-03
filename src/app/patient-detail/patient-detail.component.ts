import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PatientService} from "../services/patient.service";
import {Patient} from "../models/patient.model";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  private _patient: Patient;

  constructor(private patientService : PatientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('patientId'));

    this.patientService.getPatient(idFromRoute)
      .subscribe(response => {
        this._patient = response;
        console.log("Gegevens van patient opgehaald: ", response)
      });
  }

  get patient(): Patient {
    return this._patient;
  }
}
