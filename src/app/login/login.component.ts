import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any; 
  loginControl = new FormControl('');

  constructor(private service: ConfigService, private authService: AuthService) { }

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
      localStorage.setItem('token33', response.toString());
      console.log(response);
    })
  }
}
