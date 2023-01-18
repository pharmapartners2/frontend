import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicationService } from 'src/app/services/medication.service';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-medicatie-toevoegen',
  templateUrl: './medicatie-toevoegen.component.html',
  styleUrls: ['./medicatie-toevoegen.component.css']
})
export class MedicatieToevoegenComponent implements OnInit {
  medicatieForm: FormGroup;
  @Input() patientId: number

  constructor(private formBuilder: FormBuilder, private medicationService: MedicationService, config: NgbModalConfig, private modalService: NgbModal) {

   }

  ngOnInit(): void {
    this.medicatieForm = this.formBuilder.group({
      patientId: [''],
      bpCode: [''],
      datum: [''],
      beschrijving: [''],
    })
  }

  registerMedication() {
    this.medicationService.registerMedication(this.medicatieForm.value.patientId, this.medicatieForm.value.datum, this.medicatieForm.value.bpCode, this.medicatieForm.value.beschrijving)
    .subscribe(response => {
      console.log("Medicatie toegevoegd: ", response);
      this.modalService.dismissAll();
    });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  }
}
