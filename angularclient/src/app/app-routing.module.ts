import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import {RegearComponent} from "./regear/regear.component";
import {RegearListComponent} from "./regear/regear-list/regear-list.component";
import {RegearFromComponent} from "./regear/regear-from/regear-from.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  { path: '', redirectTo: '/regear/demand', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'regear', component: RegearComponent, children: [
      {path: 'list',component: RegearListComponent},
      {path: 'demand',component: RegearFromComponent}
    ]},
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
