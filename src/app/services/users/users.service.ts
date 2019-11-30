import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  listUsers: Users[] = []

  constructor(public http: HttpClient) { this.loginUser('', '') }

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
}
