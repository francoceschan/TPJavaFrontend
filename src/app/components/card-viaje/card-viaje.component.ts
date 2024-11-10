import { Component, Input } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';

@Component({
  selector: 'app-card-viaje',
  templateUrl: './card-viaje.component.html',
  styleUrls: ['./card-viaje.component.scss']
})
export class CardViajeComponent {

  @Input() viaje: Viaje;
  
}
