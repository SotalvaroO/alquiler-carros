import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
