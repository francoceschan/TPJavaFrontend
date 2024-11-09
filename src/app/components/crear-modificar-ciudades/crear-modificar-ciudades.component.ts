import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/model/Ciudad';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-crear-modificar-ciudades',
  templateUrl: './crear-modificar-ciudades.component.html',
  styleUrls: ['./crear-modificar-ciudades.component.scss']
})
export class CrearModificarCiudadesComponent {

  ciudad: Ciudad;

  constructor(
    private router: Router,
    private ciudadService : CiudadService,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {

    const state = this.router.lastSuccessfulNavigation?.extras?.state;
    if (state && state['data']) {
      this.ciudad = state['data'];
    } else {
      this.ciudad = new Ciudad();
    }
  
  }

  guardar() {
    this.ciudadService.guardarCiudad(this.ciudad).subscribe({
      next: (resp) => {
        this.snackBar.open('Ciudad guardada con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/gestionar-ciudades'])
      },
      error: (err) => {
        this.snackBar.open('Error al guardar la ciudad. Intente nuevamente.', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }
}
