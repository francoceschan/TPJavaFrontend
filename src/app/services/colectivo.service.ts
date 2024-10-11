import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Colectivo } from '../model/Colectivo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {

  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient : HttpClient) { }

  guardarColectivo(colectivo: Colectivo){
    return this.httpClient.post(`${environment.serverUrl}/colectivo/guardar`, colectivo, { headers: this.reqHeaders })
  }

  getAll():Observable<Colectivo[]> {
    return this.httpClient.get<Colectivo[]>(`${environment.serverUrl}/colectivo/getAll`, { headers: this.reqHeaders })
  }

  deleteById(patente: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.serverUrl}/colectivo/deleteById/${patente}`, { headers: this.reqHeaders })
  }
}
