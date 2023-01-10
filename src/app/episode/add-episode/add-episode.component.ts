import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { icpcCode } from 'src/app/models/episode.model';
import { EpisodeService } from 'src/app/services/episode.service';
import { IcpcCodeService } from 'src/app/services/icpcCode.service';

@Component({
  selector: 'app-add-episode',
  templateUrl: './add-episode.component.html',
  styleUrls: ['./add-episode.component.css'],
})
export class AddEpisodeComponent implements OnInit {
  episodeForm = FormGroup;
  protected _icpcCode: icpcCode[];
  protected selected = "----";

  constructor(
    private icpcCodeService: IcpcCodeService,
    private episodeService: EpisodeService
  ) {
    this._icpcCode = Array<icpcCode>();
  }

  ngOnInit(): void {
    this.icpcCodeService.getAllIcpcCodes()
    .subscribe(response => {
      this._icpcCode = response;
      console.log("Icpc Codes: ", response)
    });
  }

  get icpccodes(): icpcCode[] {
    return this._icpcCode;
  }

  // update(e){
  //   this.selected = e.target.value;
  // }

}
