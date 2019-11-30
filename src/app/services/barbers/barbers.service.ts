import { Injectable } from '@angular/core';
import { Barbers } from './barbers.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BarbersService {

  listBarbers: Barbers[] = [
    
  ]

  constructor(public http: HttpClient) { }

  getListBarbers() {
    this.http.get<Barbers[]>('http://localhost:3000/barbers').subscribe(
      list =>{
        this.listBarbers = list;
      }
    )
  }

  barbersById(id: String): Observable<Barbers> {
    return this.http.get<Barbers>('http://localhost:3000/barbers/'+id);
  }
}
