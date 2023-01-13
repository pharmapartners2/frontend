import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {JournalService} from "../services/journal.service";
import {Patient} from "../models/patient.model";
import {FormControl, FormGroup, Validator, FormBuilder, Validators, FormArray} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {JournaalRegel, PostJournaalRegel} from "../models/journaalRegel.model";

@Component({
  selector: 'app-add-journaal-form',
  templateUrl: './add-journaal-form.component.html',
})
export class AddJournaalFormComponent implements OnInit {
  @Input() patientId: number
  private _patients: Patient[];
  episodeForm: FormGroup;

  constructor(private fb: FormBuilder, private patientService: PatientService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static'
  }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(response => {
        this._patients = response;
      });

    this.episodeForm = this.fb.group({
      selectedPatientId: ['', Validators.required],
      episodes: this.fb.array([]),
    });
  }

  episodes(): FormArray {
    return this.episodeForm.get('episodes') as FormArray;
  }

  episodeRegels(episodeIndex: number): FormArray {
    return this.episodes().at(episodeIndex).get('regels') as FormArray;
  }

  newEpisode(): FormGroup{
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
    // // @ts-ignore
    // let patientId = this.journaalForm.get('selectedPatientId').value;
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

    this.modalService.dismissAll();
  }
}
