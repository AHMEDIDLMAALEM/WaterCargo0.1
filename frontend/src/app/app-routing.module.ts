import { ReclamationFormComponent } from './reclamation-form/reclamation-form.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { AuthGardService } from './services/auth-gard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: AppComponent, canActivate: [AuthGardService] },
  { path: 'navPage', component: NavComponent, canActivate: [AuthGardService] },
  { path: 'user', component: UserComponent, canActivate: [AuthGardService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGardService] },
  { path: 'complaints', component: ReclamationFormComponent },

  { path: 'verifyAccount/:email', component: VerifyAccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }