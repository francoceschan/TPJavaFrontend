import { Pasajero } from "./Pasajero";
import { Viaje } from "./Viaje";

export class Boleto {

    idBoleto: number;
    butaca: number;
    viaje: Viaje;
    pasajero: Pasajero;
}