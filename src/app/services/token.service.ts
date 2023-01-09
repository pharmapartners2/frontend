import {Injectable} from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class TokenService {

  isValidToken() : boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('jwt');
    console.log("Token is valid: ", !helper.isTokenExpired(token));
    return !helper.isTokenExpired(token);
  }
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getToken(): any {
    return localStorage.getItem('jwt');
  }

  deleteToken() {
    localStorage.removeItem("jwt");
  }

}
