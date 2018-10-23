import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}
  username: string;
  password: string;

  ngOnInit() {}

  logIn() {
    let user = new User();
    user.userName = 'tadriano';
    user.password = '102030';

    this.loginService.logIn(user);
   }
}
