import { Component, OnInit } from '@angular/core';
import { AuthLoginRequest } from '../../model/DTO/AuthLoginRequest';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  authLoginRequest: AuthLoginRequest;

  mostrarClave: boolean = true;

  constructor(
    private _authService : AuthService, 
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.authLoginRequest = new AuthLoginRequest;
  }

  login() {
    this._authService.login(this.authLoginRequest).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.jwt);
        this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.snackBar.open('Error al iniciar sesión. Intenta nuevamente.', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }
  

  logout(){
    this._authService.logout();
    this.router.navigate(['/home']);
  }

}
