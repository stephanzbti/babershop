import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any

  constructor(public userService: UsersService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
