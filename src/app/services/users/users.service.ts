import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  listUsers: Users[] = []
  user: Users;

  constructor(public http: HttpClient) { this.loginUser('', '') }

  getListUser() {
    let listUser: Users[] = [];

    this.http.get<Users[]>('http://localhost:3000/login').subscribe(
      list =>{
        listUser = list;
      }
    )
    return listUser
  }

  loginUser(username: string, password: string) {
    let resposta: Users = null;
    this.http.get<Users[]>('http://localhost:3000/login').subscribe(
      list =>{
        this.listUsers = list;
      }
    )

    this.listUsers.forEach( item => {
      if(item.username == username && item.password == password) {
        resposta = item
      }
    })
    return resposta
  }

  registerUser() {
    this.http.get<Users[]>('http://localhost:3000/login').subscribe(
      list =>{
        this.listUsers = list;
      }
    )

    var exist = false
    this.listUsers.forEach( users => {
      if (this.user.username == users.username || this.user.email == users.email) { exist = true; }
    })

    if (!exist) { this.http.post('http://localhost:3000/login', this.user).subscribe() } else { console.log("username or email already register!"); return false; }
    
    return true
  }
}
