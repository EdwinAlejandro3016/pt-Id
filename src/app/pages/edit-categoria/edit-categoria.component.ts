import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActivatedRoute,Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { ErrorModel } from 'src/app/models/error.model';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.scss']
})
export class EditCategoriaComponent implements OnInit {
  updatedCategoria = '';
  beforeCategoria = '';
  constructor(
    private route: ActivatedRoute,
    private categoriasService:CategoriasService,
    private storeService:StoreService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      if(id){
        this.categoriasService.get(id)
        .subscribe(rta=>{
          this.beforeCategoria = rta.nombre;
        })
      }
    })
  }

  editCategoria(){
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      if(id){
        this.categoriasService.edit(id,this.updatedCategoria)
        .subscribe({
          next: rta=>{
          console.log(rta);
          let alert: ErrorModel[] = [];
          alert.push({
            msg: "Categoria editada correctamente!",
            type: 'success'
          })
          this.storeService.sendAlerts(alert);
          this.router.navigate(['/categorias']);
          },
          error: e=>{
            console.error(e);
          }
        })
      }
    })
  }
}
