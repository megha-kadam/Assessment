import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { LoaderService } from './shared/services/loader.service';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { ProfileService } from './shared/services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularAssesment';

  //constructor(private profile : ProfileService){}  

ngOnInit(): void {
  // this.profile.fetchProfile()
  // .subscribe({
  //   next : res => console.log(res),
  //   error : err => console.log(err)
  // })
}





}
