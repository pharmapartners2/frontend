import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import {Journal, PostJournal} from "../models/journal.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class JournalService {

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getJournal(id: number) {
        return this.http.get<Journal[]>(environment.api + 'journal/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
    postJournal(journal: PostJournal) {
      return this.http.post(environment.api + 'journal', journal, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` }} );
    }
}
