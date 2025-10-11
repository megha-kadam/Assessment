import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

token !: any;

private loader = inject(LoaderService);


  intercept(request: HttpRequest<unknown>, next: HttpHandler) : Observable<HttpEvent<unknown>> {
    this.loader.loaderEmitter(true);

    if (request.url.includes('auth/login')) {  
    return next.handle(request)
    .pipe(
      finalize(() => this.loader.loaderEmitter(false))
    )
  }
this.token  = localStorage.getItem('token');

    let reqClone = request.clone({
    setHeaders : {
      'auth' : this.token,
      'Content-Type' : 'application/json'
    }
   })

  return next.handle(reqClone)
  .pipe(
    finalize(() => this.loader.loaderEmitter(false))
  )
}
}
