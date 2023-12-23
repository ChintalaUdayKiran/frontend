import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component"; // Import your signup component

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route for home
  { path: 'signup', component: SignupComponent }, // Route for signup
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
