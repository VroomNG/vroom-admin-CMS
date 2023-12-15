import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'forget-password', component: ForgotPasswordComponent },
];


