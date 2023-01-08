import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {tap} from 'rxjs/operators';
import { TokenService } from './token.service';

//models
import { UserLoginResponse,UserLogin} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.API_URL}/auth`;

  constructor(
    private http : HttpClient,
    private tokenService:TokenService
  ) { }

  login(data: UserLogin){
    return this.http.post<UserLoginResponse>(`${this.api}/login`,data)
    .pipe(
      tap(res=> this.tokenService.saveToken(res.token))
    )
  }
}
