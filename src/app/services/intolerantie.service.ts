import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Intolerantie } from "../models/intolerantie.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class IntolerantieService {

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getIntolerantie(id: number) {
        return this.http.get<Intolerantie[]>(environment.api+ 'intolerantie/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
