import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//models
import Producto from '../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private api = "https://prueba-tecnica-idecide.azurewebsites.net/api";

  constructor(
    private http : HttpClient
  ) { }

  getProducts(){
    return this.http.get<Producto[]>(this.api);
  }
}
