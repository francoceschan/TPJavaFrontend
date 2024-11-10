import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Ciudad } from 'src/app/model/Ciudad';
import { Viaje } from 'src/app/model/Viaje';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-buscador-viajes',
  templateUrl: './buscador-viajes.component.html',
  styleUrls: ['./buscador-viajes.component.scss']
})
export class BuscadorViajesComponent {

  @Output() buscarViajesPorFiltros = new EventEmitter<Viaje[]>();

  ciudades: Ciudad[] = [];
  ciudadOrigenCtrl = new FormControl('');
  filteredCiudadesOrigen: Observable<Ciudad[]>;
  ciudadDestinoCtrl = new FormControl('');
  filteredCiudadesDestino: Observable<Ciudad[]>;
  precioMinimo: number;
  precioMaximo: number;

  constructor(
    private _ciudadService: CiudadService,
    private _viajeService: ViajeService
  ) {
    this.filteredCiudadesOrigen = this.ciudadOrigenCtrl.valueChanges.pipe(
      startWith(''),
      map(state => {
        return state ? this._filterCiudades(state) : this.ciudades.slice();
      })
    );

    this.filteredCiudadesDestino = this.ciudadDestinoCtrl.valueChanges.pipe(
      startWith(''),
      map(state => {
        return state ? this._filterCiudades(state) : this.ciudades.slice();
      })
    );
  }

  ngOnInit(): void {
    this._ciudadService.getAll().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }

  private _filterCiudades(value: string): Ciudad[] {
    const filterValue = value;
    return this.ciudades.filter(ciudad => ciudad.nombre.toLowerCase().includes(filterValue));
  }

  buscarViajes() {

    const ciudadOrigen = this.ciudades.find(ciudad => ciudad.nombre === this.ciudadOrigenCtrl.value);
    const ciudadDestino = this.ciudades.find(ciudad => ciudad.nombre === this.ciudadDestinoCtrl.value);
   
    this._viajeService.buscarViajes(this.precioMinimo,this.precioMaximo, ciudadOrigen, ciudadDestino).subscribe(viajes => this.buscarViajesPorFiltros.emit(viajes))
  }

}
