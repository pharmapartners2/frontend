import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  selectedPatient: any;

  constructor(private service: ConfigService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('patientId'));

    this.selectedPatient = this.service.getPatient(idFromRoute);


    this.service.getPatient(idFromRoute)
    .subscribe(response => {
      console.log(response);
      this.selectedPatient = response;
    });

  }

}
