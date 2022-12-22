import {Injectable} from "@angular/core";

@Injectable()
export class TokenService {

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getToken(): any {
    return localStorage.getItem('jwt');
  }
}
