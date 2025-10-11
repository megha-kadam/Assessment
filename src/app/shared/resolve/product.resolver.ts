import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct[]> {
  productService = inject(ProductService);
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
    return this.productService.fetchAllProduct();
  }
}
