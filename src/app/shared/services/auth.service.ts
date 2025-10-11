import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IlogIn, ILoginResponse } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userLogInStatus : boolean = false;
baseURL : string = `${environment.url}`;

 private logInSub : Subject<boolean> = new Subject<boolean>();
  logInObs$ : Observable<boolean> = this.logInSub.asObservable();
  logInEmitter(flag : boolean){
    this.logInSub.next(flag);
  }



  // private logInResSub : Subject<ILoginResponse> = new Subject<ILoginResponse>();
  // logInResObs$ : Observable<ILoginResponse> = this.logInResSub.asObservable();
  // logInResEmitter(res : ILoginResponse){
  //   this.logInResSub.next(res);
  // }

   private profileSub : BehaviorSubject<ILoginResponse | null> = new BehaviorSubject<ILoginResponse | null>(null);
   profileObs$ : Observable<ILoginResponse | null> = this.profileSub.asObservable();
  profileEmitter(user : ILoginResponse){
    this.profileSub.next(user);
  }


  //  private userSub : Subject<Idata | null> = new BehaviorSubject<Idata | null>(null);
  //  userObs$ : Observable<Idata | null> = this.userSub.asObservable();
  // userEmitter(user : Idata){
  //   this.userSub.next(user);
  // }

  constructor(private http : HttpClient) { }

  logIn(user : IlogIn){
    let loginURL : string = `${this.baseURL}/auth/login`;
    return this.http.post(loginURL, user)
  }

  // signUp(userDetail : Isignup){
  //   let signupURL : string = `${this.baseURL}`;
  //   return this.http.post(signupURL, userDetail)
  // }

  
    saveToken(token : string){
        localStorage.setItem('token', token);
    }

    getToken() : boolean{
        return !!localStorage.getItem('token')
    }


    // phoneCode(){
    //   let url = environment.phoneCodeURL;
    //   return this.http.get(url)
    // }
}
