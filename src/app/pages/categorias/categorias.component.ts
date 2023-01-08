import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/producto.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  newCategoria = '';
  constructor(
    private categoriasService:CategoriasService
  ) { }

  ngOnInit(): void {
    this.categoriasService.getAll()
    .subscribe({
      next: data=>{
        this.categorias = data.categorias;
      },
      error: e=>{
        console.error(e);
      }
    })
  }

  addCategoria(){
    this.categoriasService.create(this.newCategoria).subscribe(
      {
        next: rta=>{
          this.categoriasService.getAll()
          .subscribe({
            next: data=>{
              this.categorias = data.categorias;
            }
          })
        },
        error: e=>{
          console.error(e);
        }
      }
    )
    this.newCategoria = '';
  }

  deleteCategoria(id:string){
    this.categoriasService.delete(id)
    .subscribe({
      next: rta=>{
        this.categoriasService.getAll()
        .subscribe({
          next: data=>{
            this.categorias = data.categorias;
          }
        })
      },
      error: e=>{
        console.log(e);
      }
    })
  }
}
