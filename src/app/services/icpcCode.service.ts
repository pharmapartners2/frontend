import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { icpcCode } from "../models/episode.model";

@Injectable({
    providedIn: 'root'
})
export class IcpcCodeService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getIcpcCode(id: number) {
        return this.http.get<icpcCode[]>(this.lclhostUrl + 'icpcCode/' + id, { headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }

    getAllIcpcCodes() {
        return this.http.get<icpcCode[]>(this.lclhostUrl + 'icpcCode', { headers:{'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }
}
