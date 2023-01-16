import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import {EpisodeRegel, PostEpisodeRegel} from "../models/EpisodeRegel.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class JournalService {

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getJournal(id: number) {
        return this.http.get<EpisodeRegel[]>(environment.api + 'journal/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }

    postJournalRegel(journal: PostEpisodeRegel) {
      return this.http.post(environment.api + 'journal', journal, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` }} );
    }
}
