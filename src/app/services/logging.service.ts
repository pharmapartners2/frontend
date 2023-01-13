import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Logging } from "../models/logging.model";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    registerLogging(log: Logging) {
        return this.http.post<Logging>(this.lclhostUrl + 'logging', {userId: log.userId, datetime: log.datetime, logLine: log.logline}, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
