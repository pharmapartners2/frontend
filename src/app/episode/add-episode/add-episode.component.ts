import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { icpcCode } from 'src/app/models/episode.model';
import { IcpcCodeService } from 'src/app/services/icpcCode.service';

@Component({
  selector: 'app-add-episode',
  templateUrl: './add-episode.component.html',
  styleUrls: ['./add-episode.component.css']
})
export class AddEpisodeComponent implements OnInit {
  episodeForm = FormGroup;
  private _icpcCode: icpcCode[];

  constructor(
    private icpcCodeService: IcpcCodeService,
  ) {}

  ngOnInit(): void {
    this.icpcCodeService.getAllIcpcCodes()
    .subscribe(response => {
      this._icpcCode = response;
      console.log("Icpc Codes: ", response)
    });
  }

}
