import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {MedicationPrescription} from "../models/medicationprescription.model";

@Injectable()
export class MedicationService {
  private url = 'https://pharmapartnersapi.azurewebsites.net/';

  constructor(private http: HttpClient, private tokenService: TokenService) {

  }

  getMedication(id: number) {
    return this.http.get<Array<MedicationPrescription>>(this.url + 'medicationprescription/' + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
