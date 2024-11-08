import { Colectivo } from "./Colectivo";

export class Viaje {

    idViaje: number;
    nombre: string;
    descripcion: string;
    precio: number;
    fechaHora: Date;
    colectivo: Colectivo;
    imagen: File | null;
    imagenBase64: string;
}