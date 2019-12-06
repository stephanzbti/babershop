import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  appointments: any[] = []
  perm: any = null

  constructor(
    public appoinmentService: AppointmentService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.perm = localStorage.getItem('permission')
    if (this.perm == null) {
      this.router.navigate(['']);
    }
    this.getUserAppoinment()
  }

  confirmAppoinment(appoinmentId: any) {
    this.appoinmentService.confirmAppoinmentUser(appoinmentId)
    this.ngOnInit()
  }

  clearAppoinment(appoinmentId: any) {
    this.appoinmentService.deleteAppoinmentUser(appoinmentId)
    this.ngOnInit()
  }

  registerAppointment(name: string, date: any, time: any, details: string) {
    let user = JSON.parse(localStorage.getItem('user'));
    this.appoinmentService.registerAppoinmentUser(user.id, name, date, time, details)
    this.ngOnInit()
  }

  getUserAppoinment() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.appointments = this.appoinmentService.getAppoinmentUser(user.id)
  }
}
