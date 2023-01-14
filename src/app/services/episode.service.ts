import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Episode, icpcCode, PostEpisode} from "../models/episode.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {
    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getEpisode(id: number) {
        return this.http.get<Episode[]>(environment.api + 'episode/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }

    postEpisode(patientId: number, datum: Date, beschrijving: String, icpcCode: icpcCode) {
        const body = { patientId, datum, beschrijving, icpcCode };
        return this.http.post<PostEpisode>(environment.api + 'episode', body, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }
}
