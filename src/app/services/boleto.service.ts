import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boleto } from '../model/Boleto';
import { BoletoDTO } from '../model/DTO/BoletoDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient : HttpClient) { }

  comprarBoleto(boletoDTO: BoletoDTO):Observable<Boleto>{
    return this.httpClient.post<Boleto>(`${environment.serverUrl}/boleto/comprarBoleto`,boletoDTO, { headers: this.reqHeaders })
  }
}
