import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenService } from "../services/token.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  err: '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*')]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  LogIn() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return console.log("Ongeldige login", this.loginForm.value) //shows log with the values of the form
    }
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(response => {
        console.log("Ingelogd door gebruiker: ", this.loginForm.value.username, response)
        this.tokenService.set('jwt', response.toString());
        this.router.navigate(['/'])
      },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              err = "Gebruikersnaam of wachtwoord is onjuist";
              console.log(err, this.loginForm.value)
            }
          }
        })
  }
}