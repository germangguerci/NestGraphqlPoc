import { Injectable } from '@nestjs/common';

import { Productor } from '../graphql';

@Injectable()
export class ProductorService {
  private readonly productores: Array<Productor> = [
    {
      nombre: 'German',
      localidad: 'Mar De Ajó',
      descripcionBreve: 'Productor de codigo',
      id: '1',
    },
  ];

  create(productor: Productor): Productor {
    productor.id = (this.productores.length + 1).toString();
    this.productores.push(productor);
    return productor;
  }

  findAll(): Productor[] {
    return this.productores;
  }

  findOneById(id: string): Productor {
    return this.productores.find((productor) => productor.id === id);
  }
}
