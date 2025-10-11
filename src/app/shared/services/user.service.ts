import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL : string = environment.url;

  constructor(private http : HttpClient) { }

  fetchUSers(){
    let userURL : string = `${this.baseURL}/users`;
    return this.http.get<IUser[]>(userURL)
  }
}
