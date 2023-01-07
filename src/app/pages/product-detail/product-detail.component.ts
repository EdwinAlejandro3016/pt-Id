import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';
ProductsService

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = '';
  product: Producto = {
    nombre: '',
    _id: 0,
    precio: 0,
    usuario: '',
    categoria: {
      _id: 0,
      nombre: ''
    }
  }
  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.productId = params.get('id');
      if(this.productId){
        this.productsService.get(this.productId)
        .subscribe(rta=>{
          console.log(rta);
          this.product = rta;
        })
      }
    })
  }

}
