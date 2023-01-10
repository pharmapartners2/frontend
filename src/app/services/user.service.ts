import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private onlinehostUrl = 'https://pharmapartnersapi.azurewebsites.net/';
    private lclhostUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient, private tokenService: TokenService){

    }

    getUsers(){
      return this.http.get<Array<User>>(this.lclhostUrl + 'user', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});

    }

  }