import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {MedicationPrescription} from "../models/medicationprescription.model";
import {environment} from "../../environments/environment";

@Injectable()
export class MedicationService {
  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getMedication(id: number) {
    return this.http.get<Array<MedicationPrescription>>(environment.api + 'medicationprescription/' + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
