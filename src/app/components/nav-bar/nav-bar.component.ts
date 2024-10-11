import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  usuarioAutenticado: boolean = false;

  constructor(
    private router : Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.usuarioAutenticado().subscribe(autenticado =>{
      this.usuarioAutenticado = autenticado
  })
  }

  gestionarViajes(){
      this.router.navigate(['/gestionar-viajes'])
  }

  gestionarColectivos(){
      this.router.navigate(['/gestionar-colectivos'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  logout(){
    this._authService.logout()
  }

}
