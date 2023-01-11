import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Episode } from "../models/episode.model";

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getEpisode(id: number) {
        return this.http.get<Episode[]>(this.onlinehostUrl + 'episode/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
