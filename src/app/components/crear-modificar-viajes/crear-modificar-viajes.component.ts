import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { Ciudad } from 'src/app/model/Ciudad';
import { Colectivo } from 'src/app/model/Colectivo';
import { Viaje } from 'src/app/model/Viaje';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ColectivoService } from 'src/app/services/colectivo.service';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-crear-modificar-viajes',
  templateUrl: './crear-modificar-viajes.component.html',
  styleUrls: ['./crear-modificar-viajes.component.scss']
})
export class CrearModificarViajesComponent implements OnInit {

  viaje: Viaje;
  colectivos: Colectivo[] = [];
  colectivoCtrl = new FormControl();
  filteredColectivos: Observable<Colectivo[]>;
  ciudades: Ciudad[] = [];
  ciudadOrigenCtrl = new FormControl('');
  filteredCiudadesOrigen: Observable<Ciudad[]>;
  ciudadDestinoCtrl = new FormControl('');
  filteredCiudadesDestino: Observable<Ciudad[]>;

  fechaInicioCtrl = new FormControl();
  fechaFinCtrl = new FormControl();

  capacidadSeleccionada: number | null;

  constructor(
    private router: Router,
    private _colectivoService: ColectivoService,
    private _viajeService: ViajeService,
    private _ciudadService: CiudadService,
    private snackBar: MatSnackBar,
    ) {

      combineLatest([
        this.fechaInicioCtrl.valueChanges,
        this.fechaFinCtrl.valueChanges
      ]).subscribe(([fechaInicio, fechaFin]) => {
          if (fechaInicio && fechaFin) {
              this._colectivoService.getColectivosDisponibles(fechaInicio, fechaFin).subscribe(
                  response => {
                      this.colectivos = response;
                  }
              );
          }
      });

      this.filteredColectivos = this.colectivoCtrl.valueChanges.pipe(
        startWith(''),
        map(state => {
          const seleccionado = this.colectivos.find(colectivo => colectivo.patente === state);
          if (seleccionado) {
            this.viaje.colectivo = seleccionado;
            this.capacidadSeleccionada = seleccionado.capacidad;
          }
          return state ? this._filterColectivos(state) : this.colectivos.slice();
        })
      );

      this.filteredCiudadesOrigen = this.ciudadOrigenCtrl.valueChanges.pipe(
        startWith(''),
        map(state => {
          const seleccionada = this.ciudades.find(ciudad => ciudad.nombre === state);
          if (seleccionada) {
            this.viaje.ciudadOrigen = seleccionada;
          }
          return state ? this._filterCiudades(state) : this.ciudades.slice();
        })
      );

      this.filteredCiudadesDestino = this.ciudadDestinoCtrl.valueChanges.pipe(
        startWith(''),
        map(state => {
          const seleccionada = this.ciudades.find(ciudad => ciudad.nombre === state);
          if (seleccionada) {
            this.viaje.ciudadDestino = seleccionada;
          }
          return state ? this._filterCiudades(state) : this.ciudades.slice();
        })
      );
    }

  ngOnInit(): void {
    this._ciudadService.getAll().subscribe(ciudades => {this.ciudades = ciudades
    })

    const state = this.router.lastSuccessfulNavigation?.extras?.state;
    if (state && state['data']) {
      this.viaje = state['data'];
      this.colectivoCtrl.setValue(this.viaje.colectivo.patente);
      this.capacidadSeleccionada = this.viaje.colectivo.capacidad;
      this.ciudadOrigenCtrl.setValue(this.viaje.ciudadOrigen.nombre);
      this.ciudadDestinoCtrl.setValue(this.viaje.ciudadDestino.nombre);
    } else {
      this.viaje = new Viaje()
    }
  }

  private _filterColectivos(value: string): Colectivo[] {
    const filterValue = value.toLowerCase();

    return this.colectivos.filter(colectivo => colectivo.patente.toLowerCase().includes(filterValue));
  }

  private _filterCiudades(value: string): Ciudad[] {
    const filterValue = value;

    return this.ciudades.filter(ciudad => ciudad.nombre.toLowerCase().includes(filterValue));
  }

  guardar() {
    this._viajeService.guardarViaje(this.viaje).subscribe({
      next: (resp) => {
        this.snackBar.open('Viaje guardado con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/gestionar-viajes'])
      },
      error: (err) => {
        this.snackBar.open('Error al guardar el viaje. Intente nuevamente.', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.viaje.imagen = file;
    }
  }
}
