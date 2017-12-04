import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string
  pass: string

  constructor(private loginService :LoginService) { }

  ngOnInit() {
  }

  login() : void{
    this.loginService.login(this.user, this.pass);
  }

}
