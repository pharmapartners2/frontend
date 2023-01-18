import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {FooterService} from "./footer.service";
import {NavbarService} from "./navbar.service";

@Injectable()
export class TokenService implements HttpInterceptor {
  constructor(private router: Router, private footerService: FooterService, private navbarService: NavbarService) {
  }

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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(() => {
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.navbarService.hide();
          this.footerService.hide();
          location.href = '/login';
        }
      }));
  }


}
