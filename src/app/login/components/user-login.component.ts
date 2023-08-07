import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginRequest} from "../models/loginRequest";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''/*, Validators.required*/],
    password: [''/*, Validators.required*/]
  });

  constructor(private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const password = this.loginForm.get('password')?.value;
    const username = this.loginForm.get('username')?.value;
    console.log(username);
    console.log(password);

    const loginRequest = new LoginRequest(username, password);

    this.loginService.login(loginRequest).subscribe((data) => console.log(data));

  }
}
