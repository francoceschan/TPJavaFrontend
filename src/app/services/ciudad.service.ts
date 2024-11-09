import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../model/Ciudad';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private httpClient : HttpClient) { }

  guardarCiudad(ciudad: Ciudad){
    return this.httpClient.post(`${environment.serverUrl}/ciudad/guardar`, ciudad, { headers: this.reqHeaders })
  }

  getAll():Observable<Ciudad[]> {
    return this.httpClient.get<Ciudad[]>(`${environment.serverUrl}/ciudad/getAll`, { headers: this.reqHeaders })
  }

  deleteById(idCiudad: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.serverUrl}/ciudad/deleteById/${idCiudad}`, { headers: this.reqHeaders })
  }
}
