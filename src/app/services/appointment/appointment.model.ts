export class Appointment {
    id: number;
    date: string;
    user_id: number;
    name: string;
    details: string;

    constructor() {
        this.id = 0;
        this.date = '';
        this.user_id = 0;
        this.name = '';
        this.details = '';
    }
}