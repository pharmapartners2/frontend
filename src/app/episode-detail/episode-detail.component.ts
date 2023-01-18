import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Episode} from "../models/episode.model";
import {JournalService} from "../services/journal.service";
import {EpisodeRegel} from "../models/EpisodeRegel.model";

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']

})
export class EpisodeDetailComponent implements OnInit {

  @Input() episode: Episode;
  private _episodeRegels: EpisodeRegel[];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private journaalService: JournalService) { }

  ngOnInit(): void {
    this.journaalService.getJournalByEpisode(this.episode.id).subscribe(response => {
      this.episodeRegels = response
    });
  }

  openEpisode(modal: any) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result;
  }

  get episodeRegels(): EpisodeRegel[] {
    return this._episodeRegels
  }


  set episodeRegels(value: EpisodeRegel[]) {
    this._episodeRegels = value;
  }
}
