import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../../models/user';
import { AlertService } from '../../share/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private _alert: AlertService
  ) {}
  username: string;
  password: string;

  ngOnInit() {}

  logIn(user, password, event: Event) {
    event.preventDefault();


    this.loginService
      .logIn(user, password)
      .subscribe(
        login => this.processarLogin(login),
        error => this._processaError(error)
      );

  }

  processarLogin(login: any) {
    localStorage['token'] = login.accessToken;
    this.router.navigate(['/home/videos']);
  }

  _processaError(error: any) {
    this._alert.error('Whoops!', 'Usuário ou Senha Inválidos', 'Ok!');
    return false;
  }
}
