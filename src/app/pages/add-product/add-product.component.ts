import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria, crearProduct } from 'src/app/models/producto.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct: crearProduct = {
    nombre: '',
    precio: 0,
    categoriaID: ''
  }

  categorias: Categoria[] = [];
  constructor(
    private productsService:ProductsService,
    private categoriasService:CategoriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriasService.getAll()
    .subscribe({
      next: data=>{
        this.categorias = data.categorias;
      },
      error: e =>{
        console.error(e)
      }
    })
  }

  crear(){
    this.productsService.create(this.newProduct)
    .subscribe({
      next: data=> {
        console.log(data);
        this.router.navigate(['./productos']);
      },
      error: e=>{
        console.log(e);
      }
    })
  }

}
