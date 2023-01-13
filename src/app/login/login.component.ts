import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenService } from "../services/token.service";
import { Router } from "@angular/router";
import { LoggingService } from '../services/logging.service';
import { Logging } from '../models/logging.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  err: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private loggingService: LoggingService,
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
      return console.log("Ongeldige login", this.loginForm.value);
      //shows log with the values of the form
    }

    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(response => {
        console.log("Ingelogd door gebruiker: ", this.loginForm.value.username, response)
        this.tokenService.set('jwt', response.toString());
        this.loggingService.registerLogging(new Logging(this.tokenService.getIdfromToken(), "Gebruiker " + this.tokenService.getIdfromToken() + " ingelogd", Date()));
        this.router.navigate(['/']);
      },
      error => {
        this.err = "Gebruikersnaam en/of wachtwoord is onjuist";
        console.log(this.err + ": ", error);
      }
    )}
}
