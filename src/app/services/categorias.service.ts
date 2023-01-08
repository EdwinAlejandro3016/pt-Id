import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import {Categoria, Categorias} from '../models/producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private api = environment.API_URL;

  categorias: Categoria[] = [];
  private myCategorias = new BehaviorSubject<Categoria[]>([]);

  myCategorias$ = this.myCategorias.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  get(id:string){
    return this.http.get<Categoria>(`${this.api}/categorias/${id}`);
  }

  loadCategorias(categorias: Categoria[]){
    this.categorias = categorias;
  }

  getAll(){
    return this.http.get<Categorias>(`${this.api}/categorias`);
  }

  edit(id:string,nombre:string){
    const body = {
      nombre
    }
    return this.http.put<Categoria>(`${this.api}/categorias/${id}`,JSON.stringify(body));
  }

  create(categoria: string){
    const body = {
      nombre: categoria
    }
    return this.http.post<Categoria>(`${this.api}/categorias`,JSON.stringify(body));
  }

  delete(id:string){
    return this.http.delete<Categoria>(`${this.api}/categorias/${id}`)
  }
}
