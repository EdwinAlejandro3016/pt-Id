import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import { User, UserResponse, UserLogin, UserRegistered} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = environment.API_URL;

  constructor(
    private http : HttpClient
  ) { }

  create(data: User){
    return this.http.post<UserResponse>(`${this.api}/usuarios`,data)
  }

  edit(id:String,data: User){
    return this.http.put<UserResponse>(`${this.api}/usuarios/${id}`,data)
  }

  //pide token acomodar
  delete(id:String){
    return this.http.delete<UserResponse>(`${this.api}/usuarios/${id}`)
  }
}
