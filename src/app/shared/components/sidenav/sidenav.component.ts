import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
 
  @ViewChild('sidenav') sidenav !: MatSidenav;
  opened = true;
  profileObj !: any
  
  constructor(private router : Router, private authService : AuthService, private snackbar : SnackbarService) { }

  onLogOut(){
    localStorage.clear();
    this.router.navigate([''])
  }

   getProfileObj(){
 let profile = localStorage.getItem('profile')
    this.profileObj = JSON.parse(profile!)
  }
    
  ngOnInit(): void {
    this.getProfileObj();
  }


}
