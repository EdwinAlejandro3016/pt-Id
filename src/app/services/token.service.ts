import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  getToken(){
    const token = localStorage.getItem('TOKEN');
    return token;
  }

  saveToken(token:string){
    localStorage.setItem('TOKEN',token);
  }
}
