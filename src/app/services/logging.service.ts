import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Logging } from "../models/logging.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    registerLogging(log: Logging) {
        return this.http.post<Logging>(environment.api + 'logging', {userId: log.userId, datetime: log.datetime, logLine: log.logline}, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
