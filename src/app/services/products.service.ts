import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


//models
import {crearProduct, Producto, ProductoEditBody, ProductsResponse} from '../models/producto.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = environment.API_URL;

  private myProducts: Producto[] = [];

  private myProductsSubject = new BehaviorSubject<Producto[]>([]);

  myProductsSubject$ = this.myProductsSubject.asObservable();

  constructor(
    private http : HttpClient
  ) { }

  loadProducts(products: Producto[]){
    this.myProducts = products;
  }

  getAll(){
    return this.http.get<ProductsResponse>(`${this.api}/productos`);
  }

  get(id: string){
    return this.http.get<Producto>(`${this.api}/productos/${id}`);
  }

  create(data: crearProduct){
    const token = localStorage.getItem('TOKEN') || '';
    const body = {
      nombre: data.nombre,
      categoria: data.categoriaID,
      precio: data.precio
    }

    console.log(JSON.stringify(body));
    const headers = new HttpHeaders()
    .set('x-token',JSON.parse(token))
    .set('Content-Type', 'application/json; charset=utf-8');

    console.log(headers);
    return this.http.post<Producto>(`${this.api}/productos`,JSON.stringify(body),{'headers': headers});
  }

  edit(id:string, data: ProductoEditBody){
    const token = localStorage.getItem('TOKEN') || '';
    const body = {
      nombre: data.nombre,
      categoria: data.categoriaID,
      precio: data.precio
    }
    const headers = new HttpHeaders()
    .set('x-token',JSON.parse(token));
    console.log(headers);
    return this.http.put<Producto>(`${this.api}/productos/${id}`,body,{'headers': headers})
  }

  delete(id:string){
    const token = localStorage.getItem('TOKEN') || '';
    const headers = new HttpHeaders()
    .set('x-token',JSON.parse(token));
    return this.http.delete<Producto>(`${this.api}/productos/${id}`,{'headers': headers})
  }
}
