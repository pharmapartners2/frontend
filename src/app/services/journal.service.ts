import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Journal } from "../models/journal.model";

@Injectable({
    providedIn: 'root'
})
export class JournalService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getJournal(id: number) {
        return this.http.get<Journal[]>(this.onlinehostUrl + 'journal/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
