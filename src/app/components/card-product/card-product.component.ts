import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit{
  @Input() product: Producto = {
    precio: 0,
    _id: 0,
    nombre: '',
    categoria: {
      _id: 0,
      nombre: ''
    },
    usuario: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
