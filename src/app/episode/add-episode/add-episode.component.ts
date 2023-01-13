import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { icpcCode } from 'src/app/models/episode.model';
import { Logging } from 'src/app/models/logging.model';
import { EpisodeService } from 'src/app/services/episode.service';
import { IcpcCodeService } from 'src/app/services/icpcCode.service';
import { LoggingService } from 'src/app/services/logging.service';
import { TokenService } from 'src/app/services/token.service';

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
    private episodeService: EpisodeService,
    private tokenService: TokenService,
    private loggingService: LoggingService
  ) {
    this._icpcCode = Array<icpcCode>();
  }

  ngOnInit(): void {
    this.loggingService.registerLogging(new Logging(this.tokenService.getIdfromToken(), "Episode aanmaak-form geopend", new Date()));

    this.icpcCodeService.getAllIcpcCodes()
    .subscribe(response => {
      this._icpcCode = response;
      console.log("Icpc Codes: ", response)
    });
  }

  get icpccodes(): icpcCode[] {
    return this._icpcCode;
  }

}
