import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import {EpisodeRegel, PostEpisodeRegel} from "../models/EpisodeRegel.model";

@Injectable({
    providedIn: 'root'
})
export class JournalService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getJournal(id: number) {
        return this.http.get<EpisodeRegel[]>(this.onlinehostUrl + 'journal/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
    postJournalRegel(journal: PostEpisodeRegel) {
      return this.http.post(this.onlinehostUrl + 'journal', journal, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` }} );
    }
}
