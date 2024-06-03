import { Routes } from '@angular/router';
import { LoginComponent } from './form/login/login.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SignUpComponent } from './form/sign-up/sign-up.component';
import { AdminSignUpComponent } from './form/admin-sign-up/admin-sign-up.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'body', component: BodyComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'admin', children: [
    {path: 'signup', component: AdminSignUpComponent}
  ] },
  {path: '', redirectTo:'/body', pathMatch: 'full'}

];
