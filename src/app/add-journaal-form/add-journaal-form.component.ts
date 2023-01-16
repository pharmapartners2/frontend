import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {JournalService} from "../services/journal.service";
import {Patient} from "../models/patient.model";
import {FormControl, FormGroup, Validator, FormBuilder, Validators, FormArray} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {EpisodeRegel, PostEpisodeRegel} from "../models/EpisodeRegel.model";
import {EpisodeService} from "../services/episode.service";
import {PostEpisode} from "../models/episode.model";
import {Logging} from "../models/logging.model";
import {LoggingService} from "../services/logging.service";
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-add-journaal-form',
  templateUrl: './add-journaal-form.component.html',
})
export class AddJournaalFormComponent implements OnInit {
  @Input() patientId: number
  private _patients: Patient[];
  private _episodeForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService, config: NgbModalConfig, private modalService: NgbModal, private episodeService: EpisodeService, private journaalService: JournalService, private loggingService: LoggingService, private tokenService: TokenService) {
    config.backdrop = 'static'
  }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(response => {
        this._patients = response;
      });

    this._episodeForm = this.fb.group({
      selectedPatientId: ['', Validators.required],
      episodes: this.fb.array([]),
    });
  }

  get episodeForm(): FormGroup {
    return this._episodeForm;
  }

  episodes(): FormArray {
    return this._episodeForm.get('episodes') as FormArray;
  }

  episodeRegels(episodeIndex: number): FormArray {
    return this.episodes().at(episodeIndex).get('regels') as FormArray;
  }

  newEpisode(): FormGroup {
    return this.fb.group({
      beschrijving: ['', Validators.required],
      code: [Validators.required],
      datum: [Validators.required],
      regels: this.fb.array([])
    });
  }

  newRegel(): FormGroup {
    return this.fb.group({
      beschrijving: [''],
      datum: [''],
    });
  }

  addEpisode() {
    this.episodes().push(this.newEpisode());
  }

  addEpisodeRegel(episodeIndex: number) {
    this.episodeRegels(episodeIndex).push(this.newRegel());
  }

  removeEpisode(index: number) {
    this.episodes().removeAt(index);
  }

  removeRegel(episodeIndex: number, regelIndex: number) {
    this.episodeRegels(episodeIndex).removeAt(regelIndex)
  }

  get patients(): Patient[] {
    return this._patients;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  }

  submitForm() {
    if (this.episodeForm.valid) {
      const patientId = this.episodeForm.get('selectedPatientId')?.value;
      this.episodes().controls.forEach((element, episodeIndex) => {
        let beschrijving = element.get('beschrijving')?.value;
        let code = element.get('code')?.value;
        let datum = element.get('datum')?.value;
        let episode: PostEpisode = new PostEpisode(patientId, datum, beschrijving, code);
        this.postEpisode(episode, episodeIndex, patientId);
      });
    }
  }

  postEpisode(episode: PostEpisode, episodeIndex: number, patientId: number) {
    this.episodeService.postEpisode(episode).subscribe((result) => {
      this.postJournalLine(episodeIndex, result.id, patientId)
      let currentDate = new Date();
      this.loggingService.registerLogging(new Logging(this.tokenService.getIdfromToken(), "Gebruiker " + this.tokenService.getIdfromToken().toString() + " heeft episode aangemaakt met episodeId: " + result.id, currentDate ))
        .subscribe(response => {
          console.log("logged login", response);
        });
    })
  }

  postJournalLine(episodeIndex: number, episodeId: number, patientId: number) {
    this.episodeRegels(episodeIndex).controls.forEach((element, regelIndex) => {
      let beschrijving = element.get('beschrijving')?.value;
      let code = element.get('code')?.value;
      let datum = element.get('datum')?.value;
      let episodeRegel: PostEpisodeRegel = new PostEpisodeRegel(patientId, code, beschrijving, episodeId, datum)
      this.journaalService.postJournalRegel(episodeRegel).subscribe(
        result => {

        },
        error => {

        },
        () => {
          this.modalService.dismissAll()
        });
    })
  }
}
