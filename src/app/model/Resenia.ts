import { Viaje } from 'src/app/model/Viaje';
import { Pasajero } from './Pasajero';
export class Resenia {
    
    idResenia: number;
    descripcion: string;
    puntaje: number;
    viaje: Viaje;
    pasajero: Pasajero;

}