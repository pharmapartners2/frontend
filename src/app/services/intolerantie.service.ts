import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Intolerantie } from "../models/intolerantie.model";

@Injectable({
    providedIn: 'root'
})
export class IntolerantieService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getIntolerantie(id: number) {
        return this.http.get<Intolerantie[]>(this.onlinehostUrl + 'intolerantie/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
