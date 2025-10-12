import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iprofile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseURL = environment.url;

  constructor(private http : HttpClient) { }

  fetchProfile(){
    let profileURL = `${this.baseURL}/auth/me`;
    return this.http.get<Iprofile>(profileURL)
  }
}
