import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';



@Injectable()  //injectable class  automate call
export class AuthInterceptor implements HttpInterceptor {
  
  
  constructor(private loginService: LoginService) 
  {

  }

  intercept(
    req: HttpRequest<any>,    
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


//add the jwt token (localStorage ) request tokengetto user  Google HttpInterceptor
    let authReq = req;    //24
    const token = this.loginService.getToken();

    //token is not  null
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(authReq);
  }
}

//angular config
export const authInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,    
    useClass: AuthInterceptor,
    multi: true,
  },
];
