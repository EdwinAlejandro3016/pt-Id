import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorModel } from 'src/app/models/error.model';
import { Categoria, crearProduct } from 'src/app/models/producto.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

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
    private storeService: StoreService,
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

  crear(){
    this.productsService.create(this.newProduct)
    .subscribe({
      next: data=> {
        let alert: ErrorModel[] = [];
        alert.push({
            msg: "Producto creado correctamente!",
            type: 'success'
         })
        this.storeService.sendAlerts(alert);
        this.router.navigate(['./productos']);
      },
      error: e=>{
        console.log(e);
        let errors: ErrorModel[] = [];
        errors.push({
          msg: "Producto ya existente",
          type: 'danger'
        })
        this.storeService.sendAlerts(errors);
      }
    })
  }

}
