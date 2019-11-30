import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perm:any

  constructor() {
    this.perm = JSON.parse(localStorage.getItem('user'))
    console.log(this.perm.name)
  }

  ngOnInit() {
    
  }

}
