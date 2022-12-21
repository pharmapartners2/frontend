import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {
  patients: any;

  constructor(private service: ConfigService) { }

  ngOnInit(): void {
    this.service.getPatients()
    .subscribe(response => {
      this.patients = response;
    });
  
  }
}
