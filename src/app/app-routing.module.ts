import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from "./components/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent } from "./components/resetpassword/resetpassword.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login'},
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'forgotpassword', component:ForgotpasswordComponent},
  { path: 'resetpassword', component:ResetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
