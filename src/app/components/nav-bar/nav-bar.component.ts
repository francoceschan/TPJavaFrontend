import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/model/Enum/rol';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  usuarioAutenticado: boolean = false;
  roles: Rol[] = [];

  constructor(
    private router : Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.usuarioAutenticado().subscribe(autenticado =>{
      this.usuarioAutenticado = autenticado
      this.roles = this._authService.getRolesUsuario();
    }) 
  }

  mostrarItem(rol: string){
    return this.roles.toString().includes(rol);
  }

  home(){
    this.router.navigate(['/home'])
  }

  gestionarViajes(){
      this.router.navigate(['/gestionar-viajes'])
  }

  gestionarColectivos(){
      this.router.navigate(['/gestionar-colectivos'])
  }

  gestionarCiudades(){
    this.router.navigate(['/gestionar-ciudades'])
  }

  boletosComprados(){
    this.router.navigate(['/boletos-comprados'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  logout(){
    this._authService.logout()
    this.router.navigate(['/home'])
  }

}
