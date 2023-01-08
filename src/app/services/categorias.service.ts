import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import {Categoria, CategoriaResponse, Categorias} from '../models/producto.model';
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
    const token = localStorage.getItem('TOKEN') || '';

    const headers = new HttpHeaders()
    .set('x-token',JSON.parse(token))
    .set('Content-Type', 'application/json; charset=utf-8');

    const body = {
      nombre
    }

    return this.http.put<Categoria>(`${this.api}/categorias/${id}`,JSON.stringify(body),{'headers': headers});
  }

  create(categoria: string){
    const token = localStorage.getItem('TOKEN') || '';

    const headers = new HttpHeaders()
    .set('x-token',JSON.parse(token))
    .set('Content-Type', 'application/json; charset=utf-8');

    const body = {
      nombre: categoria
    }

    return this.http.post<Categoria>(`${this.api}/categorias`,JSON.stringify(body),{'headers': headers});
  }

  delete(id:string){
    const token = localStorage.getItem('TOKEN') || '';
    const headers = new HttpHeaders()
    .set('x-token',JSON.parse(token));
    return this.http.delete<Categoria>(`${this.api}/categorias/${id}`,{'headers': headers})
  }
}
