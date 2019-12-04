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

  registerAppointment(name: string, date: string, details: string) {
    let user = JSON.parse(localStorage.getItem('permission'));
    this.appoinmentService.registerAppoinmentUser(user.id, name, date, details)
    this.ngOnInit()
  }

  getUserAppoinment() {
    let user = JSON.parse(localStorage.getItem('permission'));
    this.appoinmentService.getAppoinmentUser(user.id)
  }
}
