import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(){
    const token = localStorage.getItem('TOKEN') || '';
    return token;
  }
  cerrarSession(){
    localStorage.setItem('TOKEN','');
    localStorage.setItem('USER','');
  }
  saveToken(token:string){
    localStorage.setItem('TOKEN',token);
  }
}
