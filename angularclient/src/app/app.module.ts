import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {UserService} from "./user/user-service.service";
import {AppRoutingModule} from "./app-routing.module";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserFormComponent} from "./user/user-form/user-form.component";
import { RegearComponent } from './regear/regear.component';
import { HeaderComponent } from './header/header.component';
import { RegearFromComponent } from './regear/regear-from/regear-from.component';
import { RegearListComponent } from './regear/regear-list/regear-list.component';
import {RegearService} from "./regear/regear-service.service";
import {AuthenticationService} from "./auth/authentication.service";
import {LoginComponent} from "./auth/login-component/login.component";
import {LogoutComponent} from "./auth/logout-component/logout.component";
import {AuthGuardService} from "./service/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RegearComponent,
    HeaderComponent,
    RegearFromComponent,
    RegearListComponent,
    LoginComponent,
    LogoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [UserService, RegearService,AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
