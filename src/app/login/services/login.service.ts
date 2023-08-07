import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginRequest} from "../models/loginRequest";
import {LoginResponse} from "../models/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string  = "http://localhost:8080/auth/login";



  constructor(
    private http: HttpClient
  ) { }

  login(loginRequest: LoginRequest):void{
    console.log(loginRequest);
     this.http.post<LoginResponse>(this.url, loginRequest).subscribe((loginResponse:LoginResponse) =>{
       console.log(loginResponse);
      localStorage.setItem('token', loginResponse.accessToken);
      localStorage.setItem('role', "admin");//loginResponse.roles
    })
  }


}
