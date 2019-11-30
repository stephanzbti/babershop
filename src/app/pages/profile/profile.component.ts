import { Component, OnInit } from '@angular/core';
import { BarbersService } from 'src/app/services/barbers/barbers.service'
import { Barbers } from 'src/app/services/barbers/barbers.model';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  barber: Barbers

  constructor(
    public barbersService: BarbersService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.barbersService.barbersById(this.route.snapshot.params['id']).subscribe(barber => this.barber = barber);
  }

}
