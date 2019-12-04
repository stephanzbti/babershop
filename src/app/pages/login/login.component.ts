import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  perm:any

  constructor(
    public userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.perm = localStorage.getItem('permission')
    if (this.perm != null) {
      this.router.navigate(['']);
    }
  }

  login(username: string, password: string) {
    let resposta = this.userService.loginUser(username, password)
    if (resposta != null) {
      window.localStorage.setItem('user',JSON.stringify(resposta))
      window.localStorage.setItem('permission',resposta.perfil)
      window.location.reload();
    }
  }

}
