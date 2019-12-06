import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './appointment.model';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  listAppointment: Appointment[] = []
  Appointment: Appointment = new Appointment()

  constructor(public http: HttpClient) { }

  deleteAppoinmentUser(appoinmentID: number) {
    this.http.delete('http://localhost:3000/appoinment/'+appoinmentID).subscribe()
  }

  confirmAppoinmentUser(appoinmentID: number) {
    this.listAppointment.forEach(item => {
      if (item.id == appoinmentID) {
        this.Appointment = item
        this.Appointment.confirm = true
        console.log(item)
      }
    })
    console.log(appoinmentID)
    this.http.patch('http://localhost:3000/appoinment/'+appoinmentID, this.Appointment).subscribe()
  }

  registerAppoinmentUser(user_id: number, name: string, date: Date, time: Time, details: string) {
    this.Appointment.date = date.toString() + ' ' + time.toString()
    this.Appointment.name = name
    this.Appointment.user_id = user_id
    this.Appointment.details = details
    delete this.Appointment.id

    this.http.post('http://localhost:3000/appoinment', this.Appointment).subscribe()
  }

  getAppoinmentUser(user_id: number) {
    let response:  Appointment[] = [];

    this.http.get<Appointment[]>('http://localhost:3000/appoinment').subscribe(
      list =>{
        this.listAppointment = list;
        console.log(list)
        this.listAppointment.forEach(appointment => {
          if(appointment.user_id == user_id) {
            response.push(appointment)
          }
        })
      });
    return response
  }
}
