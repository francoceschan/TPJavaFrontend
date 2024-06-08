import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colectivo } from 'src/app/model/Colectivo';

@Component({
  selector: 'app-gestionar-colectivos',
  templateUrl: './gestionar-colectivos.component.html',
  styleUrls: ['./gestionar-colectivos.component.scss']
})
export class GestionarColectivosComponent {
  constructor(
    private router: Router
  ) {}

  colectivos:Colectivo[] = [];
  displayedColumns: string[] = ['patente','capacidad', 'editar', 'borrar'];

  ngOnInit(): void {

  }

  crearColectivo(){
    this.router.navigate(['/gestionar-viajes/crear-modificar-colectivo'])
  }


}
