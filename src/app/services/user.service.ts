import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "./token.service";
import { User } from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient, private tokenService: TokenService){

    }
    getUserById(id:string){
      return this.http.get<User>(environment.api + 'user/'  + id, {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }
    getUsers(){
      return this.http.get<Array<User>>(environment.api + 'user', {headers: {'Authorization': `Bearer ${this.tokenService.getToken()}`}});
    }

  }
