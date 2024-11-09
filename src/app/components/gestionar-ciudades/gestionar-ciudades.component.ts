import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/model/Ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-gestionar-ciudades',
  templateUrl: './gestionar-ciudades.component.html',
  styleUrls: ['./gestionar-ciudades.component.scss']
})
export class GestionarCiudadesComponent {
  constructor(
    private router: Router,
    private _ciudadService: CiudadService,
    private snackBar: MatSnackBar
  ) {}

  ciudades: Ciudad[] = [];
  displayedColumns: string[] = ['idCiudad','nombre','editar','borrar'];

  ngOnInit(): void {
    this.buscarCiudades();
  }

  crearCiudad(){
    this.router.navigate(['/gestionar-ciudades/crear-modificar-ciudad'])
  }

  eliminarCiudad(idCiudad: string) {
    this._ciudadService.deleteById(idCiudad).subscribe({
      next: (res) => {
        this.snackBar.open('Ciudad eliminada con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.buscarCiudades();
      },
      error: (err) => {
        this.snackBar.open(err.error.message, 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  buscarCiudades(){
    this._ciudadService.getAll().subscribe(res => this.ciudades = res)
  }

  editarCiudad(element: Ciudad) {
    this.router.navigate(['/gestionar-ciudades/crear-modificar-ciudad'], { state: { data: element } });
  }

}
