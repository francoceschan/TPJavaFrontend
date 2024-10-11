import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercepta")
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      const cloned = request.clone({
          headers: request.headers.set("Authorization", `Bearer ${token}`)
      });
      console.log(cloned)
      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }
}
