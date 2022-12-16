import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  currentDateTime:string | null;
  constructor(public datepipe: DatePipe){
    this.currentDateTime =this.datepipe.transform((new Date), 'dd-MM-yyyy');
  }

  ngOnInit(): void {
  }

}
