import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token.service";
import {NavbarService} from "../../services/navbar.service";
import {Router} from "@angular/router";
import {FooterService} from "../../services/footer.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router, public navbarService: NavbarService, private footerService: FooterService) { }

  ngOnInit(): void {

  }

  get ifToken(): boolean {
    return this.tokenService.getToken() == null;
  }

  logout() {
    this.tokenService.deleteToken();
    location.href = '/login';
    this.footerService.hide();
    this.navbarService.hide();
  }
}
