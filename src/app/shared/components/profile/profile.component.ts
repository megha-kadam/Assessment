import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ILoginResponse } from '../../models/auth';
import { SnackbarService } from '../../services/snackbar.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileObj !: any
  constructor(
        private authService : AuthService, 
        private snackbar : SnackbarService) { }

  getProfileObj(){
 let profile = localStorage.getItem('profile')
    this.profileObj = JSON.parse(profile!)
    console.log(this.profileObj)
    
    
  }

  ngOnInit(): void {
    this.getProfileObj(); 


  }

}
