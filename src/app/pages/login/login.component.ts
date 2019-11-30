import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    let resposta = this.userService.loginUser(username, password)
    if (resposta != null) {
      window.localStorage.setItem('user',JSON.stringify(resposta))
      window.localStorage.setItem('permission',resposta.perfil)
      location.reload()
    }
  }

}
