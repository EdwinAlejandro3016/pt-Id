import { Component, OnInit } from '@angular/core';
import { ErrorModel } from 'src/app/models/error.model';
import { Categoria } from 'src/app/models/producto.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  newCategoria = '';
  constructor(
    private categoriasService:CategoriasService,
    private storeService:StoreService
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
              let alert: ErrorModel[] = [];
              alert.push({
                msg: "Categoria agregada correctamente!",
                type: 'success'
              })
              this.storeService.sendAlerts(alert);
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
            let alert: ErrorModel[] = [];
            alert.push({
              msg: "Categoria eliminada correctamente!",
              type: 'danger'
            })
            this.storeService.sendAlerts(alert);
          }
        })
      },
      error: e=>{
        console.log(e);
      }
    })
  }
}
