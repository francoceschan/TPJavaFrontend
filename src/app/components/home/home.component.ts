import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viajes: Viaje[];

  constructor() {}

  ngOnInit(): void {
  
    this.viajes = [
      { idViaje: 1, nombre: 'Viaje a la playa', descripcion: 'Un viaje relajante a la playa con amigos.', fechaHora: new Date(2024, 6, 15, 10, 30) },
      { idViaje: 2, nombre: 'Escapada a la montaña', descripcion: 'Una aventura en la montaña para desconectar.', fechaHora: new Date(2024, 7, 22, 8, 0) },
      { idViaje: 3, nombre: 'Tour por la ciudad', descripcion: 'Un recorrido por los lugares históricos de la ciudad.', fechaHora: new Date(2024, 8, 5, 14, 0) },
      { idViaje: 4, nombre: 'Crucero por el Mediterráneo', descripcion: 'Un lujoso crucero por el mar Mediterráneo.', fechaHora: new Date(2024, 9, 12, 16, 0) },
      { idViaje: 5, nombre: 'Safari en África', descripcion: 'Una emocionante aventura en la sabana africana.', fechaHora: new Date(2024, 10, 20, 6, 0) },
      { idViaje: 6, nombre: 'Visita a la Gran Muralla', descripcion: 'Un viaje cultural para explorar la Gran Muralla China.', fechaHora: new Date(2024, 11, 3, 9, 30) },
      { idViaje: 7, nombre: 'Exploración en la Antártida', descripcion: 'Una expedición para descubrir las maravillas de la Antártida.', fechaHora: new Date(2025, 0, 15, 12, 45) }
    ];
  }
}
