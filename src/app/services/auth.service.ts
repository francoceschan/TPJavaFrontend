import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthLoginRequest } from '../model/DTO/AuthLoginRequest';
import { LoginResponse } from '../model/DTO/LoginResponse';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Rol } from '../model/Enum/rol';
import { Token } from '../model/Token';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private reqHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  tokenExists = new BehaviorSubject<boolean>(this.tokenValido());

  constructor(
    private httpClient : HttpClient,
    private jwtHelper: JwtHelperService,
  ) { }

  login(authLoginRequest: AuthLoginRequest) {
    return this.httpClient.post<LoginResponse>(`${environment.serverUrl}/auth/login`, authLoginRequest, { headers: this.reqHeaders })
      .pipe(
        tap(res => {
          localStorage.setItem('token', res.jwt);  // Guarda el token en localStorage
          this.tokenExists.next(true);  // Cambia el estado de autenticación
        })
      );
  }

  logout() {
    localStorage.removeItem("token");  // Elimina el token de localStorage
    this.tokenExists.next(false);  // Cambia el estado de autenticación a no autenticado
  }

  usuarioAutenticado(): BehaviorSubject<boolean>{
    return this.tokenExists;
  }

  tokenValido(): boolean {
    let token = localStorage.getItem("token");
    if (token != null && token != "") {
      return true;
    }
    return false;
  }

  getRolesUsuario(): Rol[] {
    let authorities: Rol[] = [];
    const token = localStorage.getItem('token') || "";
    const decodedToken = this.jwtHelper.decodeToken<Token>(token);
  
    if (decodedToken?.authorities) {
      // Divide el string por comas para obtener un arreglo de roles
      const roles = decodedToken.authorities.split(',');
  
      // Itera sobre los roles y los agrega al arreglo `authorities`
      roles.forEach((role: string) => {
        authorities.push(Rol[role as keyof typeof Rol]);  // Asegúrate de mapear correctamente los roles
      });
    }
  
    return authorities;
  }

}
