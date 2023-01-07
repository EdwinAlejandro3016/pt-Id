import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss']
})
export class ProductCardDetailComponent implements OnInit {
  @Input() product: Producto = {
    nombre: '',
    _id: 0,
    precio: 0,
    usuario: '',
    categoria: {
      _id: 0,
      nombre: ''
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
