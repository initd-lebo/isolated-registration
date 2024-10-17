import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  BASE_URL = ""

  constructor(private httpClient: HttpClient) { }

  registerUser(registrationForm: User) {
    this.httpClient.post(this.BASE_URL, registrationForm)
  }

  loginUser(loginForm:any) {
    this.httpClient.post(this.BASE_URL, loginForm)
  }

  setUser(){

  }

  getUserDetails() {

  }
}
