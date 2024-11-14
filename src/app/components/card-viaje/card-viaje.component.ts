import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/model/Viaje';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.scss']
})
export class CardViajeComponent {

  constructor(
    private router : Router,
  ) { }

  @Input() viaje: Viaje;
  
  reservar(viaje: Viaje){
    this.router.navigate(['/comprar-boleto'], { state: { data: viaje } })
  }
}
