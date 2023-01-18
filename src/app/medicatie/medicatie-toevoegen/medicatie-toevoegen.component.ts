import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicationService } from 'src/app/services/medication.service';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import { Medication, MedicationPrescription } from 'src/app/models/medicationprescription.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-medicatie-toevoegen',
  templateUrl: './medicatie-toevoegen.component.html',
  styleUrls: ['./medicatie-toevoegen.component.css']
})
export class MedicatieToevoegenComponent implements OnInit {
  medicatieForm: FormGroup;

  private _medication: Medication[];
  patientId: number;
  isActive = false;
  active: number;
  bpCode: number;
  submitted= false;
  err: string;

  constructor(private formBuilder: FormBuilder, private medicationService: MedicationService, config: NgbModalConfig, private modalService: NgbModal, private route: ActivatedRoute)
   {

   }

  ngOnInit(): void {
    this.medicatieForm = this.formBuilder.group({
      bpCode: [''],
      datum: [''],
      beschrijving: [''],
    })

    const routeParams = this.route.snapshot.paramMap;
    this.patientId = Number(routeParams.get('patientId'));
    
    this.medicationService.getMedications()
      .subscribe(response => {
        this._medication = response;
      });
    
  }

  get medications(): Medication[] {
    return this._medication;
  }

  onClick(index: number, bpCode: number) {
    this.active = index;
    this.bpCode = bpCode;
  }

  searchText: string = '';
  onSearchTextChanged(searchValue:string) {
    this.searchText = searchValue;
    //console.log(this.searchText);
  }

  

  submitForm() {
    this.submitted = true;
    if(this.medicatieForm.invalid){
      return console.log("Variablen missen", this.medicatieForm.value);
    }

    this.medicationService.registerMedication(this.patientId, this.medicatieForm.value.datum,this.bpCode, this.medicatieForm.value.beschrijving)
      .subscribe(response => {
        console.log("Medicatie is aangemaakt");
        this.modalService.dismissAll()
      },
        error => {
          this.err = "Medicatie toevoegen is nog niet gelukt";
          console.log(this.err + ": ", error)
        });
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  }
}
