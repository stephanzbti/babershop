import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any
  perm: any

  constructor(
    public userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.perm != null) {
      this.router.navigate(['']);
    }
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
