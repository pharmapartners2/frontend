import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../services/patient.service";
import {Patient} from "../models/patient.model";
import {FormControl, FormGroup, Validator, FormBuilder, Validators} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-add-journaal-form',
  templateUrl: './add-journaal-form.component.html',
})
export class AddJournaalFormComponent implements OnInit{
  @Input() patientId: number
  private _patient: Patient;
  journaalForm = this.fb.group({
    beschrijving: ['', Validators.required],
    selectedPatientId: ['', Validators.required],
    datum: [],
  })



  constructor(private fb: FormBuilder, private patientService: PatientService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static'
  }

  ngOnInit(): void {

    this.patientService.getPatient(this.patientId)
      .subscribe(response => {
        this._patient = response;
      });
  }
  get patient(): Patient {
    return this._patient;
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result;
  }

  submitForm() {

  }
}
