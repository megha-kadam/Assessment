import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ILoginResponse } from '../../models/auth';
import { SnackbarService } from '../../services/snackbar.service';
import { JsonPipe } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Iprofile } from '../../models/profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileObj !: Iprofile;
  constructor(
        private authService : AuthService, 
        private snackbar : SnackbarService,
      private profile : ProfileService,
    private route : ActivatedRoute) { 
        this.profileObj = this.route.snapshot.data['profile']
      }

//   getProfileObj(){
// this.profile.fetchProfile()
// .subscribe({
//   next : (res) => {
//     this.profileObj = res;
//   },
//   error : err => this.snackbar.openSnackbar(err)
  
// })

//   }

  ngOnInit(): void {
    //this.getProfileObj();
  }

}
