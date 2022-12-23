import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  LogIn() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe( response => {
      console.log("Login method called")
      console.log(response)
      this.tokenService.set('jwt', response.toString());
      console.log(response);
      this.router.navigate(['/'])
    })
  }
}
