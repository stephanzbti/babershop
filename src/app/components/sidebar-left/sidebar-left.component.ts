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
      appointment: true,
      contact: true,
      account: true,
      dashboard: true,
      logout: true
    }
  }

}
