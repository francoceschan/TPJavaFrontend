import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Viaje } from '../model/Viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

private reqHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
})

constructor(private httpClient: HttpClient) { }

guardarViaje(viaje: Viaje): Observable<any> {
  const formData = new FormData();

  // Agrega cada campo del objeto `viaje` al `FormData`
  formData.append('viaje', new Blob([JSON.stringify({
    idViaje: viaje.idViaje,
    nombre: viaje.nombre,
    descripcion: viaje.descripcion,
    precio: viaje.precio,
    fechaHora: viaje.fechaHora,
    colectivo: viaje.colectivo
  })], { type: 'application/json' }));

  // Agrega la imagen al `FormData`, si existe
  if (viaje.imagen) {
    formData.append('imagen', viaje.imagen);
  }

  return this.httpClient.post(`${environment.serverUrl}/viaje/guardar`, formData);
}

getAll(): Observable<Viaje[]> {
  return this.httpClient.get<Viaje[]>(`${environment.serverUrl}/viaje/getAll`);
}

getViajesDisponibles(): Observable<Viaje[]> {
  return this.httpClient.get<Viaje[]>(`${environment.serverUrl}/viaje/getViajesDisponibles`);
}

deleteById(idViaje: number): Observable<void> {
  return this.httpClient.delete<void>(`${environment.serverUrl}/viaje/deleteById/${idViaje}`, { headers: this.reqHeaders });
}
}
