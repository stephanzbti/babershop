import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  appointments: any[] = []

  constructor(public appoinmentService: AppointmentService) { }

  ngOnInit() {
  }

  getUserAppoinment() {
    let user: any
    user = JSON.parse(localStorage.getItem('permission'));
    this.appoinmentService.getAppoinmentUser(user.id)
  }
}
