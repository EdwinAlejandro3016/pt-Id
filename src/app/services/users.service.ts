import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import { User, UserResponse, UserUsuariosAll, UserUsuariosObject} from '../models/user.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private api = environment.API_URL;

    usuarios: UserUsuariosObject[] = [];

    private myUsuarios = new BehaviorSubject<UserUsuariosObject[]>([]);

    myUsuarios$ = this.myUsuarios.asObservable();
  constructor(
    private http : HttpClient
  ) { }

  getAll(){
    return this.http.get<UserUsuariosAll>(`${this.api}/usuarios?limite=100`);
  }

  get(uid: string){
    this.getAll()
    .subscribe({
      next: data=> {
        const user = data.usuarios.find(i => i.uid = uid);
      }
    })
  }

  create(data: User){
    return this.http.post<UserResponse>(`${this.api}/usuarios`,data);
  }

  edit(id:string,data: User){
    return this.http.put<UserResponse>(`${this.api}/usuarios/${id}`,JSON.stringify(data));
  }

  delete(uid:string){
    const productIndex = this.usuarios.findIndex(i=> i.uid === uid);
    this.usuarios.splice(productIndex,1);

    return this.http.delete<UserResponse>(`${this.api}/usuarios/${uid}`);
  }
}
