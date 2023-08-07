import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
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

  login(loginRequest: LoginRequest){
    console.log(loginRequest);
    return this.http.post<LoginResponse>(this.url, loginRequest);
  }
}
