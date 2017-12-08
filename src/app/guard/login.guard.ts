import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private loginService :LoginService, private router :Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.isUserLoggedIn() ){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
