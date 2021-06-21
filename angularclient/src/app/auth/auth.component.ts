import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading: any;
  error: any;
  isLoginMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value)
    authForm.resetForm()

  }

  onSwitchMode() {
    console.log(this.isLoginMode)
    this.isLoginMode=!this.isLoginMode;
  }
}
