import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../share/material/material.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
