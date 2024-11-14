import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoletoDTO } from 'src/app/model/DTO/BoletoDTO';
import { Viaje } from 'src/app/model/Viaje';
import { AuthService } from 'src/app/services/auth.service';
import { BoletoService } from 'src/app/services/boleto.service';
import { Boleto } from '../../model/Boleto';

@Component({
  selector: 'app-comprar-boleto',
  templateUrl: './comprar-boleto.component.html',
  styleUrls: ['./comprar-boleto.component.scss']
})
export class ComprarBoletoComponent {

  viaje: Viaje;
  boletoDTO: BoletoDTO;
  boleto: Boleto;
  compraRealizada: boolean = false;

  constructor(
    private router : Router,
    private _boletoService: BoletoService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {

    const state = this.router.lastSuccessfulNavigation?.extras?.state;
    if (state && state['data']) {
      this.viaje = state['data']
    } else {
      
    }
    this.boletoDTO = new BoletoDTO;
    this.boletoDTO.mailPasajero = this._authService.getUsuario();
    this.boletoDTO.viaje = this.viaje;
  }

  comprar(){
    this._boletoService.comprarBoleto(this.boletoDTO).subscribe(res => {
      this.boleto = res;
      this.compraRealizada = true;
    })
  }

}
