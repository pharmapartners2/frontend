import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {JournalService} from "../services/journal.service";
import {Patient} from "../models/patient.model";
import {FormControl, FormGroup, Validator, FormBuilder, Validators, FormArray} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {EpisodeRegel, PostEpisodeRegel} from "../models/EpisodeRegel.model";
import {EpisodeService} from "../services/episode.service";
import {PostEpisode} from "../models/episode.model";

@Component({
  selector: 'app-add-journaal-form',
  templateUrl: './add-journaal-form.component.html',
})
export class AddJournaalFormComponent implements OnInit {
  @Input() patientId: number
  private _patients: Patient[];
  private _episodeForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService, config: NgbModalConfig, private modalService: NgbModal, private episodeService: EpisodeService, private journaalService: JournalService) {
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
        try {
          this.episodeService.postEpisode(episode).subscribe((result) => {
            this.episodeRegels(episodeIndex).controls.forEach((element, regelIndex) => {
              let beschrijving = element.get('beschrijving')?.value;
              let code = element.get('code')?.value;
              let datum = element.get('datum')?.value;
              let episodeId = result.id
              let episodeRegel: PostEpisodeRegel = new PostEpisodeRegel(patientId, beschrijving, code, datum, episodeId)
              this.journaalService.postJournalRegel(episodeRegel).subscribe((result) => {

              });
            })
          })
        } catch (err) {
        }
      })
      this.modalService.dismissAll();
    }
    //
    // this.episodes.controls.forEach((element, index) => {
    //   let beschrijving = element.get('beschrijving')?.value;
    //   let code = element.get('code')?.value;
    //   let datum = element.get('datum')?.value;
    //
    //   // @ts-ignore
    //   let episode: PostJournal = new PostJournal(patientId, beschrijving, code, datum)
    //   this.journaalService.postJournal(episode).subscribe(result => {
    //     console.log(result)
    //   })
    // });


  }
}
