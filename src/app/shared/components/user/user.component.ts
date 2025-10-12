import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users !: IUser[];
  filteredUsers : IUser[] = [];

  constructor(
        private userService : UserService,
        private snackbar : SnackbarService,
        private route : ActivatedRoute
  ) { 
    let user = this.route.snapshot.data['users'];
    this.users = user.users;
   this.filteredUsers = [...this.users]
  }

  userSearch = new FormControl('');

  // getUSer(){
  //   this.userService.fetchUSers()
  //   .subscribe({
  //     next : (res : IUser[] | any)=> {
  //        this.users = res.users;
  //        console.log(this.users);
         
  //       this.filteredUsers = [...this.users];
  //       console.log(this.filteredUsers);
        
  //     },
  //     error : err => this.snackbar.openSnackbar(err)
  //   })
  // }

  ngOnInit(): void {
    //this.getUSer();


      this.userSearch.valueChanges.subscribe((value) => {
      this.filterUsers(value!);
    });
    
  }

  filterUsers(searchVal: string) {
    if (!searchVal) {
      this.filteredUsers = [...this.users]; 
      return;
    }
    const lowerText = searchVal.toLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.firstName.toLowerCase().includes(lowerText) ||
      user.lastName.toLowerCase().includes(lowerText)
    );
  }

}
