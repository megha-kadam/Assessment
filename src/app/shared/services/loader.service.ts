import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSub$ : Subject<boolean> = new Subject<boolean>();
  loaderObs$ : Observable<boolean> = this.loaderSub$.asObservable();
  loaderEmitter(flag : boolean){
    this.loaderSub$.next(flag)
  }

  constructor() { }
}
