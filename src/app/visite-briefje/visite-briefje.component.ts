import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-visite-briefje',
  templateUrl: './visite-briefje.component.html',
  styleUrls: ['./visite-briefje.component.css']
})
export class VisiteBriefjeComponent implements OnInit {
  selectedPatient: any;
  currentDateTime: string | null;

  constructor(private service: ConfigService, private route: ActivatedRoute, public datepipe: DatePipe ){
    this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('patientId'));

    this.selectedPatient = this.service.getPatient(idFromRoute);

    this.service.getPatient(idFromRoute)
    .subscribe(response => {
      this.selectedPatient = response;
      console.log(response);
    });

  }
}
