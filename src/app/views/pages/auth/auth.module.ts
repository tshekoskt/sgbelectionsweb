import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { VerifyUserOtpComponent } from './verify-user-otp/verify-user-otp.component';
import { ParentSchoolComponent } from './parent-school/parent-school.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'parent-login',
        component: ParentLoginComponent
      },
      {
        path: 'principal-login',
        component: PrincipalLoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'verify-otp',
        component: VerifyOtpComponent
      },
      {
        path: 'verify-user-otp',
        component: VerifyUserOtpComponent
      },
      {
        path: 'parentschool',
        component: ParentSchoolComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyOtpComponent,
    VerifyUserOtpComponent,
    AuthComponent,
    ParentLoginComponent,
    ParentLoginComponent,
    ParentSchoolComponent,
    PrincipalLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ]
})
export class AuthModule { }
