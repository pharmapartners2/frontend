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

    postEpisode(episode: PostEpisode) {
        return this.http.post<Episode>(environment.api + 'episode', episode, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }
}
