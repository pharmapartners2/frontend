import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PatientService } from "../services/patient.service";
import { Patient } from "../models/patient.model";
import { Episode } from '../models/episode.model';
import { EpisodeService } from '../services/episode.service';
import { MedicationService } from "../services/medication.service";
import { MedicationPrescription } from "../models/medicationprescription.model";

@Component({
  selector: 'app-visite-briefje',
  templateUrl: './visite-briefje.component.html',
  styleUrls: ['./visite-briefje.component.css']
})
export class VisiteBriefjeComponent implements OnInit {
  private _patient: Patient;
  private _episode: Episode[];
  private _medicationPrescriptions: MedicationPrescription[];
  currentDateTime: string | null;

  constructor(
    private patientService: PatientService, 
    private route: ActivatedRoute, 
    private datepipe: DatePipe, 
    private medicationService: MedicationService,
    private episodeService: EpisodeService){
      this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
      this._medicationPrescriptions = Array<MedicationPrescription>();


  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('patientId'));

    this.patientService.getPatient(idFromRoute)
    .subscribe(response => {
      this._patient = response;
      console.log(response);
    });

    this.medicationService.getMedication(idFromRoute)
      .subscribe(response => {
        this._medicationPrescriptions = response;
        console.log(response);
      });

    this.episodeService.getEpisode(idFromRoute)
      .subscribe(response => {
        this._episode = response;
        console.log(response[0]);
      });
  }

  get patient(): Patient {
    return this._patient;
  }

  get medicationPrescriptions(): Array<MedicationPrescription> {
    return this._medicationPrescriptions;
  }

  get episode(): Episode[] {
    return this._episode;
  }

}
