import { Productor } from 'src/graphql';

export class CreateProductorDto extends Productor {}

export class UpdateProductorDto {
  id: string;
  nombre: string;
  localidad: string;
  descripcionBreve: string;
}
