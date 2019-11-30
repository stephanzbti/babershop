import { Component, OnInit } from '@angular/core';
import { BarbersService } from 'src/app/services/barbers/barbers.service';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.component.html',
  styleUrls: ['./barbers.component.css']
})
export class BarbersComponent implements OnInit {

  constructor(public barbersService: BarbersService) { }

  ngOnInit() {
    this.barbersService.getListBarbers();
  }

}
