import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { CustomRegex } from '../../const/validator';
import { ILoginResponse } from '../../models/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  allreadyHasAccount : boolean = true;
  showHide : boolean = true;

  logInForm !: FormGroup;
  signUpForm !: FormGroup;

  constructor(
        private authService : AuthService,
        private snackbar : SnackbarService,
        private router : Router
  ){}

  createLogInForm(){
    this.logInForm = new FormGroup({
      username : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      password : new FormControl(null, [Validators.required])
    })
  }

  get l(){
    return this.logInForm.controls
  }

  get s(){
    return this.signUpForm.controls
  }

  createSignupForm(){
    this.signUpForm = new FormGroup({
      username : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      password : new FormControl(null, [Validators.required])
    })
  }

  onLogIn(){
    if(this.logInForm.valid){
      let val = this.logInForm.value;
     this.authService.logIn(val)
    .subscribe({
      next : (res : ILoginResponse | any) => {
        this.authService.saveToken(res.accessToken);
        this.logInForm.reset();
        localStorage.setItem('profile', JSON.stringify(res))
        
       this.authService.profileEmitter(res);
    
        
        this.router.navigate(['/dashboard']);
        this.snackbar.openSnackbar('Login successfully');
      },
      error : err => {
        this.snackbar.openSnackbar(err.error.message)
      }
     })
    }
  }

  onSignUp(){
   if(this.signUpForm.valid){
     let val = this.signUpForm.value;
    this.signUpForm.reset();
    this.authService.logInEmitter(true);
   }
    
  }

 ngOnInit(): void {
   this.createLogInForm();
   this.createSignupForm();


 }

}


