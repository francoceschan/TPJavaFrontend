import { Component } from '@angular/core';
import { Resenia } from '../../model/Resenia';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReseniaService } from 'src/app/services/resenia.service';
import { Boleto } from 'src/app/model/Boleto';

@Component({
  selector: 'app-crear-modificar-resenia',
  templateUrl: './crear-modificar-resenia.component.html',
  styleUrls: ['./crear-modificar-resenia.component.scss']
})
export class CrearModificarReseniaComponent {

  boleto: Boleto;
  resenia: Resenia;

  stars: number = 5;
  ratingChange: number;
  hoveredStar: number = 0;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private _reseniaService: ReseniaService
    ) { }

  ngOnInit(): void {

    const state = this.router.lastSuccessfulNavigation?.extras?.state;
    if (state && state['data']) {
      this.boleto = state['data'];
    }

    this._reseniaService.findReseniaByViajeAndPasajero(this.boleto.viaje.idViaje,this.boleto.pasajero.id).subscribe(
      res => {
        if(res === null){
          this.resenia = new Resenia();
          this.resenia.viaje = this.boleto.viaje;
          this.resenia.pasajero = this.boleto.pasajero;
        } else {
          this.resenia = res
        }
      }
    )





  
  }

  guardar() {
    this._reseniaService.guardarResenia(this.resenia).subscribe({
      next: (resp) => {
        this.snackBar.open('Reseña guardada con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/boletos-comprados'])
      },
      error: (err) => {
        this.snackBar.open('Error al guardar la reseña. Intente nuevamente.', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  setRating(value: number) {
    if(this.resenia){
      this.resenia.puntaje = value;
    }
  }

  setHover(value: number) {
    this.hoveredStar = value;
  }

  resetHover() {
    this.hoveredStar = 0;
  }
}
