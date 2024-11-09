import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
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

  capacidadSeleccionada: number | null;

  constructor(
    private router: Router,
    private _colectivoService: ColectivoService,
    private _viajeService: ViajeService,
    private _ciudadService: CiudadService,
    private snackBar: MatSnackBar,
    ) {
      this.filteredColectivos = this.colectivoCtrl.valueChanges.pipe(
        startWith(''),
        map(state => (state ? this._filterColectivos(state) : this.colectivos.slice())),
      );

      this.colectivoCtrl.valueChanges.subscribe(value => {
        const seleccionado = this.colectivos.find(colectivo => colectivo.patente === value);
        if(seleccionado){
          this.viaje.colectivo = seleccionado;
          this.capacidadSeleccionada = seleccionado ? seleccionado.capacidad : null;
        }
      });

      this.filteredCiudadesOrigen = this.ciudadOrigenCtrl.valueChanges.pipe(
        startWith(''),
        map(state => (state ? this._filterCiudades(state) : this.ciudades.slice())),
      );

      this.ciudadOrigenCtrl.valueChanges.subscribe(value => {
        const seleccionada = this.ciudades.find(ciudad => ciudad.nombre === value);
        if(seleccionada){
          this.viaje.ciudadOrigen = seleccionada;
        }
      });

      this.filteredCiudadesDestino = this.ciudadDestinoCtrl.valueChanges.pipe(
        startWith(''),
        map(state => (state ? this._filterCiudades(state) : this.ciudades.slice())),
      );

      this.ciudadDestinoCtrl.valueChanges.subscribe(value => {
        const seleccionada = this.ciudades.find(ciudad => ciudad.nombre === value);
        if(seleccionada){
          this.viaje.ciudadDestino = seleccionada;
        }
      });
    }


  ngOnInit(): void {
    this._colectivoService.getAll().subscribe(colectivos => {this.colectivos = colectivos})
    this._ciudadService.getAll().subscribe(ciudades => {this.ciudades = ciudades
      console.log(ciudades)
    })

    const state = this.router.lastSuccessfulNavigation?.extras?.state;
    if (state && state['data']) {
      this.viaje = state['data'];
      this.colectivoCtrl.setValue(this.viaje.colectivo.patente);
      this.capacidadSeleccionada = this.viaje.colectivo.capacidad;
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
