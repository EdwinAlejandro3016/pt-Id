import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

//models
import {Producto} from '../../models/producto.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Producto[] = [];
  constructor(
    private productsService: ProductsService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.productsService.getAll().
    subscribe({
      next: data=>{
        const myUser = this.authService.getUser();
        if(myUser){
        //agregar solo los productos que pertenezcan a ese usuario
        console.log(myUser.uid);
        console.log(data.productos)
        const productsFiltered = data.productos.filter(i=> i.usuario._id === myUser.uid);
        console.log('myUser Products',this.products);
        this.products = productsFiltered;
        this.productsService.products = productsFiltered;
        }
      }
    })

    this.productsService.myProducts$.subscribe(data=>{
      this.products = data;
    });
  }

}
