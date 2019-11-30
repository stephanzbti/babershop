import { Injectable } from '@angular/core';
import { Clients } from './clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  listClients: Clients[] = [
    {
      id: 1,
      name: 'Luis Felipe Silva Santos',
      nickname: 'Felipe',
      password: '73673627',
      email: 'luissantos122@gmail.com',
      cpf: 12478665400,
      birthday: '14/05/1997'
    },
    {
      id: 2,
      name: 'João Lucas Machado',
      nickname: 'João',
      password: '89201726',
      email: 'joaomachado@gmail.com',
      cpf: 124763876076,
      birthday: '09/09/1992'
    },
    {
      id: 3,
      name: 'Pedro Henrique dos Santos',
      nickname: 'Pedrinho',
      password: '98783929',
      email: 'phsantos22@gmail.com',
      cpf: 12478665400,
      birthday: '09/09/1990'
    }
  ]

  constructor() { }

  getListClients() {

  }

}
