import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilService } from '../../share/services/http-util-service';
import { RequestOptions, Headers } from '@angular/http';
import { User } from '../../models/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'token/request';
  constructor(private http: HttpClient, private httpUtil: HttpUtilService) {}

  logIn(user: User): Observable<any> {
    const params = JSON.stringify({
      grant_type: 'password',
      username: user.userName,
      password: user.password
    });
    const url = this.httpUtil.url(this.loginUrl);
    const body =
      'username=' +
      user.userName +
      '&password=' +
      user.password +
      '&grant_type=password';
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(url, body, options)
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
}
