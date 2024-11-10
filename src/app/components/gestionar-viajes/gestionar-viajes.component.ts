import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';;
import { Viaje } from 'src/app/model/Viaje';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-gestionar-viajes',
  templateUrl: './gestionar-viajes.component.html',
  styleUrls: ['./gestionar-viajes.component.scss']
})
export class GestionarViajesComponent {

  constructor(
    private router: Router,
    private _viajeService: ViajeService,
    private snackBar: MatSnackBar
  ) {}

  viajes:Viaje[];
  displayedColumns: string[] = ['nombre','fechaHoraInicio', 'editar', 'borrar'];

  ngOnInit(): void {
    this.buscarViajes();
  }

  crearViaje(){
    this.router.navigate(['/gestionar-viajes/crear-modificar-viaje'])
  }


  editarViaje(viaje: Viaje) {
    this.router.navigate(['/gestionar-viajes/crear-modificar-viaje'], { state: { data: viaje } });
  }

  eliminarViaje(idViaje: number) {
    this._viajeService.deleteById(idViaje).subscribe({
      next: (res) => {
        this.snackBar.open('Viaje eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.buscarViajes();
      },
      error: (err) => {
        this.snackBar.open('Error al eliminar el viaje. Intente nuevamente.', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  buscarViajes(){
    this._viajeService.getAll().subscribe(res => 
      {
        this.viajes = res
      })
  }

}
