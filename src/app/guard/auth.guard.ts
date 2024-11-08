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

  verificaRol(data: Data): Boolean {
    let rolesUsuario: Rol[] = this._authService.getRolesUsuario();
    // Condiciones: ¿la pagina exige rol? y ¿el usuario no tiene rol admin?.
    if (data['roles'] && !rolesUsuario.includes(Rol.ROLE_ADMINISTRATIVO)) {
      return rolesUsuario.find(rolUsuario => data['roles'].includes(rolUsuario)) != undefined;
    }
    return true;
  }
}
