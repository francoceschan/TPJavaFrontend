import { Colectivo } from "./Colectivo";
import { Ciudad } from './Ciudad';

export class Viaje {

    idViaje: number;
    nombre: string;
    descripcion: string;
    ciudadOrigen: Ciudad;
    ciudadDestino: Ciudad;
    precio: number;
    fechaHora: Date;
    colectivo: Colectivo;
    imagen: File | null;
    //imagenBase64: string;
}