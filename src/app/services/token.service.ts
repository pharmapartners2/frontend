import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  private tokenString: string | null;
  isValidToken(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('jwt');
    console.log('Token is valid: ', !helper.isTokenExpired(token));
    return !helper.isTokenExpired(token);
  }
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getToken(): any {
    return localStorage.getItem('jwt');
  }

  getUsernamefromToken(): any {
    const token = localStorage.getItem('jwt');
    const helper = new JwtHelperService;
    if (!token) {
      console.log('No token found in local storage');
      return null;
    }
    const userId = helper.decodeToken(token);
    if (!userId) {
      console.log('UserId not found in token');
      return null;
    }
    return userId.sub;
  }
  getIdfromToken(): any {
    const token = localStorage.getItem('jwt');
    const helper = new JwtHelperService;
    if (!token) {
      console.log('No token found in local storage');
      return null;
    }
    const userId = helper.decodeToken(token);
    if (!userId) {
      console.log('UserId not found in token');
      return null;
    }
    return userId.userId;
  }

  deleteToken() {
    localStorage.removeItem('jwt');
  }
}
