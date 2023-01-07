import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import {Producto, ProductsResponse} from '../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = environment.API_URL;

  constructor(
    private http : HttpClient
  ) { }

  getAll(){
    return this.http.get<ProductsResponse>(`${this.api}/productos`);
  }

  get(id: string){
    return this.http.get<Producto>(`${this.api}/productos/${id}`);
  }

  create(data: Producto){
    return this.http.post<Producto>(`${this.api}/productos`,data);
  }
}
