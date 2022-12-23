import { Component, OnInit } from '@angular/core';
import {Patient} from "../../models/patient.model";
import {PatientService} from "../../services/patient.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {

  }

  get ifToken(): boolean {
    if (this.tokenService.getToken() == null) {
      return true;
    }
    return false;
  }

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['/login'])
  }
}
