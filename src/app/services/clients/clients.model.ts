import { DatePipe } from '@angular/common';


export class Clients {
    id: number;
    name: string;
    nickname: string;
    password: string;
    email: string;
    cpf: number;
    birthday: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.nickname = '';
        this.password = '';
        this.email = '';
        this.cpf = 0;
        this.birthday = '';
    }
}