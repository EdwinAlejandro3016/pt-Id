import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {tap} from 'rxjs/operators';
import { TokenService } from './token.service';

//models
import { UserLoginResponse,UserLogin, UserUsuariosAll, UserUsuariosObject} from '../models/user.model';
import { UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.API_URL}`;

  constructor(
    private http : HttpClient,
    private tokenService:TokenService,
    private usersService:UsersService
  ) { }

  getUser(){
    const userLocal = localStorage.getItem('USER') || '';
    const user = JSON.parse(userLocal);
    return user;
  }

  login(data: UserLogin){
    //obtengo mi usuario con todos sus datos
    const usuariosDB = this.http.get<UserUsuariosAll>(`${this.api}/usuarios?limite=100`).subscribe({
      next: user=>{
        console.log(user);
        const myUser = user.usuarios.find(i=> i.correo === data.correo);
        localStorage.setItem('USER',JSON.stringify(myUser));
      }
    })


    //devolver respuesta del login
    return this.http.post<UserLoginResponse>(`${this.api}/auth/login`,data)
    .pipe(
      tap(res=> {
        this.tokenService.saveToken(res.token);
      })
    )
  }
}
