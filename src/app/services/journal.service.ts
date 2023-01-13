import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import {JournaalRegel, PostJournaalRegel} from "../models/journaalRegel.model";

@Injectable({
    providedIn: 'root'
})
export class JournalService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getJournal(id: number) {
        return this.http.get<JournaalRegel[]>(this.onlinehostUrl + 'journal/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
    postJournalRegel(journal: PostJournaalRegel) {
      return this.http.post(this.onlinehostUrl + 'journal', journal, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` }} );
    }
}
