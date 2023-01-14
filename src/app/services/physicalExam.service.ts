import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { PhysicalExam } from "../models/physicalExam.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PhysicalExamService {
    constructor(private http: HttpClient, private tokenService: TokenService) {

    }

    getPhysicalExam(id: number) {
        return this.http.get<PhysicalExam[]>(environment.api + 'PhysicalExam/' + id, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } });
    }

    createPhysicalExam(datum:string, waarde:number, ddelement:number, patientid:number) {
      return this.http.post(environment.api + "physicalexam", {patientId:patientid, datum:datum, waarde:waarde, ddElementId:ddelement }, { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}` } })
    }
}
