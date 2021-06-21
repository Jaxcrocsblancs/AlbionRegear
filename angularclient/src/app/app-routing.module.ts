import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import {RegearComponent} from "./regear/regear.component";
import {RegearListComponent} from "./regear/regear-list/regear-list.component";
import {RegearFromComponent} from "./regear/regear-from/regear-from.component";
import {LoginComponent} from "./auth/login-component/login.component";
import {LogoutComponent} from "./auth/logout-component/logout.component";
import {AuthGuardService} from "./service/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/regear/demand', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'regear', component: RegearComponent, children: [
      {path: 'list',component: RegearListComponent,canActivate:[AuthGuardService]},
      {path: 'demand',component: RegearFromComponent}
    ]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
