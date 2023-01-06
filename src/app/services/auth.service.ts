import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import { User, UserLogin, UserResponse, UserRegistered} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.API_URL}/auth`;

  constructor(
    private http : HttpClient
  ) { }

  login(correo: string, password: string){
    const data = JSON.stringify({
      correo,
      password
    });
    return this.http.post<UserLogin>(`${this.api}/login`,data);
  }

  home(token:string){
    return this.http.get(`${this.api}/home`);
  }
}
