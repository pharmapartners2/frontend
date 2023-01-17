import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientService} from "../services/patient.service";
import {PhysicalExamService} from "../services/physicalExam.service";
import {ddElement} from "../models/physicalExam.model";
import {DDElementService} from "../services/ddelement.service";
@Component({
  selector: 'app-add-physical-exam-form',
  templateUrl: './add-physical-exam-form.component.html',
  styleUrls: ['./add-physical-exam-form.component.css']
})
export class AddPhysicalExamFormComponent implements OnInit {

  patientId: number
  physicalExamForm: FormGroup;
  submitted= false;
  err: string;
  ddelementId: number;

  private _ddelements: ddElement[];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private physicalExamService: PhysicalExamService,
    private router: Router,
    private route: ActivatedRoute,
    private ddelementService: DDElementService)
  {
    config.backdrop = 'static'
  }

  ngOnInit(): void {
    this.physicalExamForm = this.formBuilder.group({
      datum: ['', Validators.required],
      waarde: ['', Validators.required],
    })
    const routeParams = this.route.snapshot.paramMap;
    this.patientId = Number(routeParams.get('patientId'));

    this.ddelementService.getDDElement()
      .subscribe(response => {
        this._ddelements = response;
      });
  }
  searchText: string = '';
  onSearchTextChanged(searchValue:string) {
    this.searchText = searchValue;
    //console.log(this.searchText);
  }

  isActive = false;
  active: number;

  onClick(index: number, ddelementId: number) {
    this.active = index;
    this.ddelementId = ddelementId;
  }
  get ddelements(): ddElement[] {
    return this._ddelements;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  }


  submitForm() {
    this.submitted = true;
    if(this.physicalExamForm.invalid){
      return console.log("Variablen missen", this.physicalExamForm.value);
    }


    const waarde = parseInt(this.physicalExamForm.value.waarde)
    if(isNaN(waarde)){
      console.log("waarde not entered")
    }
    if(waarde > 250 || waarde < 0){
      console.log("Waarde is niet gezond genoeg")
    }

    this.physicalExamService.createPhysicalExam(this.physicalExamForm.value.datum, waarde, this.ddelementId, this.patientId)
      .subscribe(response => {
        console.log("lichamelijk onderzoek wordt aangemaakt");
        this.modalService.dismissAll()
      },
        error => {
          this.err = "Lichamelijk onderzoek toevoegen is nog niet gelukt";
          console.log(this.err + ": ", error)
        });
  }
}
