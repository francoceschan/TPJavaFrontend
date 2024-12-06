import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Rol } from '../model/Enum/rol';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private _authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.usuarioAutenticado().getValue()) {
      if (this.verificaRol(route.data)) {
        return true
      }
      this.router.navigate(["home"]);
      return false;
    }
    else {
      this.router.navigate(["home"]);
      return false;
    }
  }

  verificaRol(data: Data): boolean {
    const rolesUsuario: Rol[] = this._authService.getRolesUsuario();
    if (data['roles']) {
      return data['roles'].some((rolRequerido: Rol) => rolesUsuario.includes(rolRequerido));
    }
    return true; // Si no hay roles definidos en data, permite el acceso
  }  
}
