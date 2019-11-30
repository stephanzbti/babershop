import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public servicesService: ServicesService) { }

  ngOnInit() {
  }

}
