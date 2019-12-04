import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {
  perm:any

  permission: any

  constructor() { 
    this.perm = localStorage.getItem('permission')
  }

  ngOnInit() {
    this.permission = {
      home: true,
      login: this.perm == null ? true : false,
      about: true,
      service: true, 
      barber: true,
      appointment: this.perm == 'cliente' ? true : false,
      contact: true,
      account: this.perm != null ? true : false,
      dashboard:  this.perm == 'admin' ? true : false,
      logout: this.perm != null ? true : false,
      register: this.perm == null ? true : false
    }
  }

  logout() {
    localStorage.removeItem('permission')
    localStorage.removeItem('user')
    window.location.reload();
  }

}
