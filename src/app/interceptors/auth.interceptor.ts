import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  private isTokenExpired(token: string): boolean {
    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const expirationDate = new Date(tokenData.exp * 1000);
      return expirationDate < new Date();
    } catch {
      return true;
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token");
    
    if (token) {
      // Verificar si el token está expirado
      if (this.isTokenExpired(token)) {
        this.authService.logout();
        this.router.navigate(['/home']);
        return throwError(() => new Error('Token expirado'));
      }

      const cloned = request.clone({
          headers: request.headers.set("Authorization", `Bearer ${token}`)
      });
      return next.handle(cloned);
    }
    
    return next.handle(request);
  }
}