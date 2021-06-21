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
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RegearComponent,
    HeaderComponent,
    RegearFromComponent,
    RegearListComponent,
    AuthComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [UserService, RegearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
