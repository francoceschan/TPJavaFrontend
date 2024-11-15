import { Component, Input } from '@angular/core';
import { ReseniaPublicaDTO } from '../../model/DTO/ReseniaPublicaDTO';

@Component({
  selector: 'app-card-resenia',
  templateUrl: './card-resenia.component.html',
  styleUrls: ['./card-resenia.component.scss']
})
export class CardReseniaComponent {

  @Input() resenia: ReseniaPublicaDTO;

  rating: number = 0;
  starsArray: number[] = [0, 1, 2, 3, 4];

  ngOnInit(){
    this.rating = this.resenia.puntaje;
  }

}
