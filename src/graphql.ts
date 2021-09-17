
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Productor {
    nombre: string;
    localidad?: Nullable<string>;
    descripcionBreve?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    id: string;
}

export class DeleteProductorResponse {
    deleted: string;
}

export abstract class IQuery {
    abstract productores(): Nullable<Productor>[] | Promise<Nullable<Productor>[]>;

    abstract productor(id: string): Nullable<Productor> | Promise<Nullable<Productor>>;
}

export abstract class IMutation {
    abstract addProductor(nombre: string, localidad?: Nullable<string>, descripcionBreve?: Nullable<string>): Nullable<Productor> | Promise<Nullable<Productor>>;

    abstract deleteProductor(id: string): Nullable<DeleteProductorResponse> | Promise<Nullable<DeleteProductorResponse>>;

    abstract updateProductor(id: string, nombre?: Nullable<string>, localidad?: Nullable<string>, descripcionBreve?: Nullable<string>): Nullable<Productor> | Promise<Nullable<Productor>>;

    abstract assignProductor(idProducto: string, idProductor: string): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
