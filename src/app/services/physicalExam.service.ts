import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { PhysicalExam } from "../models/physicalExam.model";

@Injectable({
    providedIn: 'root'
})
export class PhysicalExamService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getPhysicalExam(id: number) {
        return this.http.get<PhysicalExam[]>(this.lclhostUrl + 'PhysicalExam/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }
}
