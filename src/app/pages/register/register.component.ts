import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Users } from 'src/app/services/users/users.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UsersService,
    private router: Router) { }

  ngOnInit() {
  }

  register(name: string, userName: string, password: string, confirm_password: string, emailRegister: string, confirm_email:string, cpfRegister: string, birthDate: Date) {
    if (this.checkValid(password, confirm_password) && this.checkValid(emailRegister, confirm_email)) {
      this.userService.user = new Users;
      this.userService.user.name = name;
      this.userService.user.username = userName;
      this.userService.user.password = password;
      this.userService.user.email = emailRegister;
      this.userService.user.cpf = cpfRegister;
      this.userService.user.birth = birthDate;

      if ( this.userService.registerUser() == true ) { this.router.navigate(['/login']); }
    }
  }

  checkValid(item1: string, item2: string) {
    if (item1 != item2) { return false } else { return true };
  }

}
