import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
 
@Component({

  selector: 'app-login',

  standalone: true,

  imports: [

    CommonModule,

    ReactiveFormsModule,

    MatFormFieldModule,

    MatInputModule,

    MatButtonModule

  ],

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent {
 
  loginForm: FormGroup;
 
  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({

      username: ['', Validators.required],

      password: ['', Validators.required]

    });

  }
 
  login(){

    if(this.loginForm.invalid) return;
 
    const { username, password } = this.loginForm.value;

    console.log('Usuario:', username);

    console.log('Password:', password);

  }

}

 