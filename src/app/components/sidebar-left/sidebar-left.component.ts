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
      login: this.perm == 'public' ? true : false,
      about: this.perm == 'public' ? true : false,
      service: this.perm == 'public' ? true : false,
      barber: this.perm == 'account' ? true : false,
      appointment: this.perm == 'account' ? true : false,
      contact: this.perm == 'public' ? true : false,
      account: this.perm == 'account' ? true : false,
      dashboard: this.perm == 'admin' ? true : false,
      logout: this.perm == 'account' ? true : false
    }
  }

}
