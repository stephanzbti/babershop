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
    console.log(this.perm)
  }

  ngOnInit() {
    this.permission = {
      login: true,
      about: true,
      service: true, 
      barber: true,
      appointment: this.perm == 'cliente' ? true : false,
      contact: true,
      account: this.perm == null ? true : false,
      dashboard:  this.perm == 'admin' ? true : false,
      logout: this.perm != null ? true : false
    }
  }

}
