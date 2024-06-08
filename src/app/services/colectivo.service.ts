import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Colectivo } from '../model/Colectivo';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {

  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient : HttpClient) { }

  guardarColectivo(colectivo: Colectivo){
    return this.httpClient.post(`${environment.serverUrl}/colectivo`, colectivo, { headers: this.reqHeaders })
  }
}
