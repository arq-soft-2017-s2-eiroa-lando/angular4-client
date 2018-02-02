import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private isLoggedIn : boolean = false


  constructor(private router :Router) {}

  isUserLoggedIn() : boolean{
    console.log("Logged in? " + this.isLoggedIn)
    return this.isLoggedIn
  }

  login(u,p) : void{
    if(u == "admin" && p == "admin"){
      this.isLoggedIn = true;
      this.router.navigate(['dashboard'])
    }
  }
}
