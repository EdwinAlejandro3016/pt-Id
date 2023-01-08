import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria, CategoriaResponse, Categorias, Producto, ProductoEditBody } from 'src/app/models/producto.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss']
})
export class ProductCardDetailComponent implements OnInit {
  @Input() product: Producto = {
    nombre: '',
    _id: '',
    precio: 0,
    usuario: '',
    categoria: {
      _id: '',
      nombre: ''
    }
  }

  productEdit: ProductoEditBody = {
    nombre: this.product.nombre,
    categoriaID: '',
    _id: this.product._id,
    precio: this.product.precio
  }
  categorias: Categoria[] = [];

  constructor(
    private categoriasService:CategoriasService,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriasService.getAll()
    .subscribe(data=>{
      this.categorias = data.categorias;
      console.log(this.categorias);
    })
  }
  editar(){
    const {nombre,precio,categoriaID} = this.productEdit;

    if(!nombre){
      this.productEdit.nombre = this.product.nombre;
    }
    if(!precio){
      this.productEdit.precio = this.product.precio;
    }
    if(!categoriaID){
      this.productEdit.categoriaID = this.product.categoria._id;
    }
    this.productsService.edit(this.product._id,this.productEdit)
    .subscribe({
      next: data =>{
        console.log(data)
        this.router.navigate(['./productos']);
      },
      error: error=>{
        console.error(error.error.msg);
      }
    })
  }

  eliminar(){
    const resConfirm = confirm("Estas seguro de eliminar este producto ?");
    if(!resConfirm){
      return;
    }
    this.productsService.delete(this.product._id);
  }
}
