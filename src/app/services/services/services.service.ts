import { Injectable } from '@angular/core';
import { Services } from './services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  listService: Services[] = [
    {
      id: 1,
    imagePath: 'assets/uploads/barber_service_01.jpg',
    title: 'Barba, Bigode',
    text: 'O serviço "barba, bigode" são para os clientes que buscam aparar, cortar ou mudarem o estilo da barba.'
    },
    {
      id: 2,
    imagePath: 'assets/uploads/barber_service_02.jpg',
    title: 'Barba, Cabelo E Bigode',
    text: 'Serviço clássico e completo, que compõe a barba feita e o corte de cabelo.'
    },
    {
      id: 3,
    imagePath: 'assets/uploads/barber_service_03.jpg',
    title: 'Corte De Cabelo',
    text: 'Serviço é destinado ao corte de cabelo e para os clientes que buscam cabelos mais modernos atualmente.'
    },
    {
      id: 4,
    imagePath: 'assets/uploads/produtos barbershop.jpg',
    title: 'Venda De Produtos',
    text: 'A venda de produtos é realizada na barbearia, e pode ser adquirido pelos clientes.'
    },
    {
      id: 5,
    imagePath: 'assets/uploads/barber_service_05.jpg',
    title: 'Hidratação Facial',
    text: 'Serviço voltado para a face, Hidratação da barba e da pele.'
    },
    {
      id: 6,
    imagePath: 'assets/uploads/barber_service_06.jpg',
    title: 'Cuidados Com Cabelo',
    text: 'Serviço para o cabelo dos clientes que buscam tratamento, pintura, relaxamento e entre outros fatores.'
    }
  ]

  constructor() { }

  getListService() {

  }
}
