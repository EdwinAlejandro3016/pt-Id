import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorModel } from 'src/app/models/error.model';

import { Categoria, CategoriaResponse, Categorias, Producto, ProductoEditBody } from 'src/app/models/producto.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';



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
    usuario: {
      nombre: '',
      _id: ''
    },
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
    private storeService:StoreService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriasService.getAll()
    .subscribe({
      next: data=>{
        const myUser = this.authService.getUser();
        if(myUser){
         //agregar solo las categorias que pertenezcan a ese usuario
         const categoriasFiltered = data.categorias.filter(i=> i.usuario?._id == myUser.uid);
         console.log(categoriasFiltered);
         this.categorias = categoriasFiltered;
         this.categoriasService.categorias = categoriasFiltered;
         }
      }
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
        let alert: ErrorModel[] = [];
        alert.push({
          msg: "Producto Editado correctamente!",
          type: "success"
        });
        this.storeService.sendAlerts(alert);
      },
      error: e=>{
        let errors: ErrorModel[] = [];
        errors.push({
          msg: "Error en la respuesta del servidor por favor intentar con otro nombre",
          type: 'danger'
        })
        this.storeService.sendAlerts(errors);
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
