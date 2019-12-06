import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  perm:any = null

  constructor(private router: Router) {  }

  ngOnInit() {
    this.perm = localStorage.getItem('permission')
    if (this.perm == null) {
      this.router.navigate(['']);
    }
  }

}
