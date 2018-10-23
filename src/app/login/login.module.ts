
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../share/material/material.module';
import { LoginService } from './services/login.service';
import { HttpUtilService } from '../share/services/http-util-service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, LoginRoutingModule, MaterialModule],
  providers: [LoginService, HttpUtilService, HttpClient],
  declarations: [LoginComponent]
})
export class LoginModule {}
