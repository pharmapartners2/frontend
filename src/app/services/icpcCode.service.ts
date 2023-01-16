import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { icpcCode } from "../models/episode.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class IcpcCodeService {

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getIcpcCode(id: number) {
        return this.http.get<icpcCode[]>(environment.api+ 'icpcCode/' + id, { headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }

    getAllIcpcCodes() {
        return this.http.get<icpcCode[]>(environment.api+ 'icpcCode', { headers:{'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }
}
