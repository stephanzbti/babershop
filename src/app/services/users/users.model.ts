export class Users {
    id: number;
    username: string;
    password: string;
    perfil: string;
    name: string;
    email: string;
    cpf: string;
    birth: Date;

    constructor() {
        this.id = 0;
        this.username = '';
        this.password = '';
        this.perfil = 'cliente';
        this.name = '';
        this.email = '';
        this.cpf = '';
        this.birth = new Date();
    }
}