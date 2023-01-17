import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "./token.service";
import {environment} from "../../environments/environment";
import {ddElement} from "../models/physicalExam.model";
import {Appointment} from "../models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class DDElementService{
  constructor(private http: HttpClient, private tokenService: TokenService) {

  }
  getDDElement(){
    return this.http.get<Array<ddElement>>(environment.api + 'ddelement', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
  getDDElementById(Id:number) {
    return this.http.get<Array<ddElement>>(environment.api + 'ddelement/' + Id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
  }
}
