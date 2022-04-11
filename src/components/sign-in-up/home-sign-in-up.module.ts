import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSignInUpRoutingModule } from './home-sign-in-up-routing.module';
import { HomeSignUpComponent } from './home-sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    HomeSignUpComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HomeSignInUpRoutingModule
  ]
})
export class HomeSignInUpModule { }
