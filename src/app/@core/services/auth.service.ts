import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpBaseService } from './http-base.service';
import { Observable } from 'rxjs';
import { AuthConst } from '../consts/auth.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpBaseService) { }

  //Login user

  login(email: string, password: string, pin: string): Observable<any> {
    return this.http.post<any>(`https://reqres.in/api/login `, { email, password, pin });
  }



  //Logout

  logout() {
    localStorage.removeItem(AuthConst.token);
  }
}
