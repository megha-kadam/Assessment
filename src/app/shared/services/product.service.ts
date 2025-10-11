import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL : string = environment.url;

  constructor(private http : HttpClient) { }

  fetchAllProduct(){
    let fetchURL = `${this.baseURL}/products`;
    return this.http.get<IProduct[]>(fetchURL);
  }
}
