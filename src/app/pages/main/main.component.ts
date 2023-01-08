import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.productsService.getAll()
    .subscribe(data=>{
      this.products = data.productos;
      console.log(this.products)
    })
  }

}
