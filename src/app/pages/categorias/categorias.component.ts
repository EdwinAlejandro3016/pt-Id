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
        this.categoriasService.loadCategorias(data.categorias);
      },
      error: e=>{
        console.error(e);
      }
    })
    this.categoriasService.myCategorias$.subscribe(data=>{
      this.categorias = data;
    });
  }

  addCategoria(){
    this.categoriasService.create(this.newCategoria).subscribe(
      {
        next: rta=>{
          this.categoriasService.categorias.push(rta);
          let alert: ErrorModel[] = [];
          alert.push({
                msg: "Categoria agregada correctamente!",
                type: 'success'
              })
              this.storeService.sendAlerts(alert);
        },
        error: e=>{
          console.error(e);
          let errors: ErrorModel[] = [];
          errors.push({
            msg: e.error.msg,
            type: 'danger'
          })
          this.storeService.sendAlerts(errors);
        }
      }
    )
    this.newCategoria = '';
  }

  deleteCategoria(id:string){
    this.categoriasService.delete(id)
    .subscribe({
      next: rta=>{
            let alert: ErrorModel[] = [];
            alert.push({
              msg: "Categoria eliminada correctamente!",
              type: 'danger'
            })
            const indexCategoria = this.categoriasService.categorias.findIndex(i=> i._id === id);

            this.categoriasService.categorias.splice(indexCategoria,1);
            this.storeService.sendAlerts(alert);
      },
      error: e=>{
        console.log(e);
        let errors: ErrorModel[] = [];
        errors.push({
          msg: "No se ah podido eliminar la categoria",
          type: 'danger'
        })
        this.storeService.sendAlerts(errors);
      }
    })
  }
}
