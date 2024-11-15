import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resenia } from '../model/Resenia';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ReseniaPublicaDTO } from '../model/DTO/ReseniaPublicaDTO';

@Injectable({
  providedIn: 'root'
})
export class ReseniaService {

  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient : HttpClient) { }

  guardarResenia(resenia: Resenia){
    return this.httpClient.post(`${environment.serverUrl}/resenia/guardar`, resenia, { headers: this.reqHeaders })
  }

  findReseniaByViajeAndPasajero(idViaje: number, idPasajero: number):Observable<Resenia>{
    return this.httpClient.get<Resenia>(`${environment.serverUrl}/resenia/findReseniaByViajeAndPasajero/${idViaje}/${idPasajero}`, { headers: this.reqHeaders })
  }

  findReseniasRandom():Observable<ReseniaPublicaDTO[]>{
    return this.httpClient.get<ReseniaPublicaDTO[]>(`${environment.serverUrl}/resenia/findReseniasRandom`, { headers: this.reqHeaders })
  }
}
