import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perm:any

  constructor(private router: Router) {
    this.perm = JSON.parse(localStorage.getItem('user'))
    console.log(this.perm.name)
  }

  ngOnInit() {
    if (this.perm != null) {
      this.router.navigate(['']);
    }
  }

}
