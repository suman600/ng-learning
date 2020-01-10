import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from './login-form.component';

import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginFormComponent],
  providers: [AuthGuard, AuthService],
})
export class LoginFormModule { }
