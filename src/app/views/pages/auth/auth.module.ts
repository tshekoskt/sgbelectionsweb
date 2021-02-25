import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { ParentOtpComponent } from './parent-otp/parent-otp.component';
import { ParantSchoolComponent } from './parant-school/parant-school.component';
import {ReactiveFormsModule} from "@angular/forms"

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
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'parent-otp',
        component: ParentOtpComponent
      },
      {
        path: 'parentschool',
        component: ParantSchoolComponent
      }
    ]
  },
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent,ParentOtpComponent, AuthComponent, ParentLoginComponent,ParentLoginComponent, ParentOtpComponent, ParantSchoolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AuthModule { }
