import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Colectivo } from 'src/app/model/Colectivo';
import { ColectivoService } from 'src/app/services/colectivo.service';

@Component({
  selector: 'app-gestionar-colectivos',
  templateUrl: './gestionar-colectivos.component.html',
  styleUrls: ['./gestionar-colectivos.component.scss']
})
export class GestionarColectivosComponent {
  constructor(
    private router: Router,
    private _colectivoService: ColectivoService,
    private snackBar: MatSnackBar
  ) {}

  colectivos:Colectivo[] = [];
  displayedColumns: string[] = ['patente','capacidad', 'editar', 'borrar'];

  ngOnInit(): void {
    this.buscarColectivos();
  }

  crearColectivo(){
    this.router.navigate(['/gestionar-colectivos/crear-modificar-colectivo'])
  }

  eliminarColectivo(patente: string) {
    this._colectivoService.deleteById(patente).subscribe({
      next: (res) => {
        this.snackBar.open('Colectivo eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.buscarColectivos();
      },
      error: (err) => {
        this.snackBar.open(err.error, 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  buscarColectivos(){
    this._colectivoService.getAll().subscribe(res => this.colectivos = res)
  }

  editarColectivo(element: Colectivo) {
    this.router.navigate(['/gestionar-colectivos/crear-modificar-colectivo'], { state: { data: element } });
  }


}
