import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iprofile } from '../models/profile';
import { ProfileService } from '../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Iprofile> {
profile = inject(ProfileService);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iprofile> {
    return this.profile.fetchProfile()
  }
}
