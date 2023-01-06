import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import { User, UserLoginResponse,UserLogin, UserResponse, UserRegistered} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.API_URL}/auth`;

  constructor(
    private http : HttpClient
  ) { }

  login(data: UserLogin){
    return this.http.post<UserLoginResponse>(`${this.api}/login`,data);
  }

  home(token:string){
    return this.http.get(`${this.api}/home`);
  }
}
