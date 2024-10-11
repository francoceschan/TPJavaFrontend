import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colectivo } from 'src/app/model/Colectivo';
import { ColectivoService } from '../../services/colectivo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-modificar-colectivos',
  templateUrl: './crear-modificar-colectivos.component.html',
  styleUrls: ['./crear-modificar-colectivos.component.scss']
})
export class CrearModificarColectivosComponent {

  colectivo: Colectivo;

  constructor(
    private router: Router,
    private colectivoService : ColectivoService,
    private snackBar: MatSnackBar,
    ) { }


  ngOnInit(): void {

    const state = this.router.lastSuccessfulNavigation?.extras?.state;
    if (state && state['data']) {
      this.colectivo = state['data']; // Aquí obtienes directamente el objeto 'colectivo'
    } else {
      this.colectivo = new Colectivo();
      //console.error('No se recibió el objeto colectivo');
    }
  
  }

  guardar() {
    this.colectivoService.guardarColectivo(this.colectivo).subscribe({
      next: (resp) => {
        this.snackBar.open('Colectivo guardado con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/gestionar-colectivos'])
      },
      error: (err) => {
        this.snackBar.open('Error al guardar el colectivo. Intente nuevamente.', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  
  }
}
