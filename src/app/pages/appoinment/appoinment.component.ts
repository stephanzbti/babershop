import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {

  state = {
    date: new Date(),
  }

  appointments: any[] = [
    {
      day: "10/09/2019 10:00:00",
      name: "Taito Fu"
    },
    {
      day: "15/09/2019 12:10:00",
      name: "Mario"
    },
    {
      day: "10/09/2019 12:30:00",
      name: "Luigi"
    },
    {
      day: "10/09/2019 13:53:00",
      name: "Link"
    },
    {
      day: "10/09/2019 16:37:00",
      name: "Zelda"
    },
    {
      day: "10/09/2019 15:32:00",
      name: "Pikachu"
    },
    {
      day: "10/09/2019 11:02:00",
      name: "Dragonite"
    },
    {
      day: "10/09/2019 13:50:00",
      name: "Kurby"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
