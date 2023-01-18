import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Medication, MedicationPrescription, postMedicationPrescription} from "../models/medicationprescription.model";
import {environment} from "../../environments/environment";

@Injectable()
export class MedicationService {
  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getMedication(id: number) {
    return this.http.get<Array<MedicationPrescription>>(environment.api + 'medicationprescription/' + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }

  getMedications() {
    return this.http.get<Array<Medication>>(environment.api + 'medications', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }

  registerMedication(patientId: number, datum: String, bpCode: number, beschrijving: String) {
    return this.http.post<postMedicationPrescription>( environment.api+ 'medicationprescription', {patientId: patientId, datum:datum, beschrijving:beschrijving,bpCode:bpCode} , { headers: { 'Authorization': `Bearer ${this.tokenService.getToken()}`}});
}
}
