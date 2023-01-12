import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {JournalService} from "../services/journal.service";
import {Patient} from "../models/patient.model";
import {FormControl, FormGroup, Validator, FormBuilder, Validators, FormArray} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Journal, PostJournal} from "../models/journal.model";

@Component({
  selector: 'app-add-journaal-form',
  templateUrl: './add-journaal-form.component.html',
})
export class AddJournaalFormComponent implements OnInit {
  @Input() patientId: number
  private _patients: Patient[];
  journaalForm = this.fb.group({
    selectedPatientId: ['', Validators.required],
    regels: this.fb.array([]),
  });

  constructor(private fb: FormBuilder, private patientService: PatientService, config: NgbModalConfig, private modalService: NgbModal, private journaalService: JournalService) {
    config.backdrop = 'static'
  }

  ngOnInit(): void {
    this.addRegel()
    this.patientService.getPatients()
      .subscribe(response => {
        this._patients = response;
      });
  }

  get regels(): FormArray {
    return this.journaalForm.get('regels') as FormArray;
  }

  addRegel() {
    const regelForm = this.fb.group({
      beschrijving: ['', Validators.required],
      code: [Validators.required],
      datum: [Validators.required],
    });
    this.regels.push(regelForm)
  }

  removeRegel(index: number) {
    this.regels.removeAt(index);
  }

  get patients(): Patient[] {
    return this._patients;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  }

  submitForm() {
    // @ts-ignore
    let patientId = this.journaalForm.get('selectedPatientId').value;

    this.regels.controls.forEach((element, index) => {
      let beschrijving = element.get('beschrijving')?.value;
      let code = element.get('code')?.value;
      let datum = element.get('datum')?.value;

      // @ts-ignore
      let episode: PostJournal = new PostJournal(patientId, beschrijving, code, datum)
      this.journaalService.postJournal(episode).subscribe(result => {
        console.log(result)
      })
    });

    this.modalService.dismissAll();
  }
}
