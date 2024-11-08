import { Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/model/Viaje';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  viajes: Viaje[];

  constructor(
    private _viajeService: ViajeService
  ) {}

  ngOnInit(): void {
    this.buscarViajes()
  }

  buscarViajes(){
    this._viajeService.getViajesDisponibles().subscribe(res => 
      {
        this.viajes = res
      })
  }
}
