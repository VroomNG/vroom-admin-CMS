import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InputComponent } from '../../layouts/shared/input/input.component';
import { AlertsComponent } from '../../layouts/shared/alerts/alerts.component';


import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    InputComponent,
    AlertsComponent,
    ChangePasswordComponent
  ]
})
export class AuthLayoutModule { }
