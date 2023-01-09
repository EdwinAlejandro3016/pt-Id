import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//models
import {crearProduct, Producto, ProductoEditBody, ProductsResponse} from '../models/producto.model';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { UserUsuariosObject } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = environment.API_URL;

  products: Producto[] = [];
  private myProducts = new BehaviorSubject<Producto[]>([]);
  myProducts$ = this.myProducts.asObservable();

  constructor(
    private http : HttpClient,
    private authService:AuthService
  ) { }

  loadProducts(products: Producto[]){
    this.products = products;
    this.myProducts.next(this.products);
    return this.products;
  }

  getAll(){
    return this.http.get<ProductsResponse>(`${this.api}/productos`);
  }

  get(id: string){
    return this.http.get<Producto>(`${this.api}/productos/${id}`);
  }

  create(data: crearProduct){
    const body = {
      nombre: data.nombre,
      categoria: data.categoriaID,
      precio: data.precio
    }

    return this.http.post<Producto>(`${this.api}/productos`,JSON.stringify(body));
  }

  edit(id:string, data: ProductoEditBody){
    const body = {
      nombre: data.nombre,
      categoria: data.categoriaID,
      precio: data.precio
    }
    return this.http.put<Producto>(`${this.api}/productos/${id}`,body);
  }

  delete(id:string){
    const productIndex = this.products.findIndex(i=> i._id === id);
    this.products.splice(productIndex,1);

    return this.http.delete<Producto>(`${this.api}/productos/${id}`);
  }
}
