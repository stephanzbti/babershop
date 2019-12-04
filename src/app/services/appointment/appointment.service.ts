import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment.model';
import { Users } from '../users/users.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  listAppointment: Appointment[] = []
  Appointment: Appointment

  constructor(public http: HttpClient) { }

  registerAppoinmentUser(user_id: number, name: string, date: string, ) {
    this.Appointment.date = date
    this.Appointment.name = name
    this.Appointment.user_id = user_id

    this.http.post('http://localhost:3000/login', this.Appointment).subscribe()
  }

  getAppoinmentUser(user_id: number) {
    let response:  Appointment[] = [];

    this.http.get<Appointment[]>('http://localhost:3000/appoinment').subscribe(
      list =>{
        this.listAppointment = list;
      }
    )

    this.listAppointment.forEach(appointment => {
      if(appointment.user_id == user_id) {
        response.push(appointment)
      }
    });
    return response
  }
}
