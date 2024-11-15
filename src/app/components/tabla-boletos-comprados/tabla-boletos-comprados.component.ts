import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Boleto } from 'src/app/model/Boleto';
import { AuthService } from 'src/app/services/auth.service';
import { BoletoService } from 'src/app/services/boleto.service';

@Component({
  selector: 'app-tabla-boletos-comprados',
  templateUrl: './tabla-boletos-comprados.component.html',
  styleUrls: ['./tabla-boletos-comprados.component.scss']
})
export class TablaBoletosCompradosComponent {

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _boletoService: BoletoService,
  ) {}
  
  boletos: Boleto[] = [];
  displayedColumns: string[] = ['nombreViaje','fechaInicio','resenia'];

  ngOnInit(): void {
    this._boletoService.findBoletosByMail(this._authService.getUsuario()).subscribe(res => this.boletos = res)
  }

  cargarResenia(element: Boleto){
    this.router.navigate(['/boletos-comprados/crear-modificar-resenia'], { state: { data: element } });
  }
}
