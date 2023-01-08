import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActivatedRoute,Router } from '@angular/router';

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
          this.router.navigate(['/categorias']);
          },
          error: e=>{
            console.error(e.error.errors);
          }
        })
      }
    })
  }
}
