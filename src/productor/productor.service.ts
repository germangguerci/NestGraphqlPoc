import { Injectable, NotFoundException } from '@nestjs/common';

import { Productor } from '../graphql';
import { UpdateProductorDto } from './dto/productor.dto';

@Injectable()
export class ProductorService {
  private productores: Array<Productor> = [
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

  update(payload: UpdateProductorDto) {
    const productor = this.productores.find((item) => item.id === payload.id);
    const productorIndex = this.productores.findIndex(
      (item) => item.id === payload.id,
    );
    if (!productor) {
      throw new NotFoundException(`Can't find productor with id ${payload.id}`);
    }
    const updatedProductor = { ...productor, ...payload };
    this.productores[productorIndex] = updatedProductor;
    return updatedProductor;
  }

  delete(id: string) {
    const beforeLength = this.productores.length;
    this.productores = this.productores.filter(
      (productor) => productor.id !== id,
    );
    if (beforeLength === this.productores.length) {
      throw new NotFoundException('Cant find productor with id: ${id}');
    }
    return {
      deleted: id,
    };
  }
}
