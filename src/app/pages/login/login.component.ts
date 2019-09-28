import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser() {
    window.localStorage.setItem('permission','account')
  }

  constructor() { }

  ngOnInit() {
  }

}
