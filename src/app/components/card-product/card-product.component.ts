import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ErrorModel } from 'src/app/models/error.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit{
  @Input() product: Producto = {
    precio: 0,
    _id: '',
    nombre: '',
    categoria: {
      _id: '',
      nombre: ''
    },
    usuario: ''
  }
  constructor(
    private productsService: ProductsService,
    private storeService:StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onDelete(id:string){
    this.productsService.delete(id)
    .subscribe({
      next: rta=>{
        let alert: ErrorModel[] = [];
        alert.push({
          msg: "Producto eliminado correctamente!",
          type: 'danger'
        })
        this.storeService.sendAlerts(alert);
        this.router.navigate(['/']);
      },
      error: e=>{
        console.error(e);
      }
    })
  }
}
