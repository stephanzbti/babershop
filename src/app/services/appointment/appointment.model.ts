import { Barbers } from '../barbers/barbers.model';
import { Clients } from '../clients/clients.model'

export class Appointment {
    id: number;
    date: string;
    barber: Barbers;
    client: Clients;
    value: number;

    constructor() {
        this.id = 0;
        this.date = '';
        this.barber = null;
        this.client = null;
        this.value = 0;
    }
}