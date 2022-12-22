import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  currentDateTime: string | null;
  patients: any;

  constructor(public datepipe: DatePipe, private service: ConfigService) {
    this.currentDateTime = this.datepipe.transform(new Date(), 'dd-MM-yyyy');
  }

  ngOnInit(): void {
    this.service.getPatients().subscribe((response) => {
      this.patients = response;
    });
  }
}
