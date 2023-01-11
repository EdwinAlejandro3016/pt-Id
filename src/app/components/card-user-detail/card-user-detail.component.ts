import { Component, Input, OnInit } from '@angular/core';
import { UserUsuariosObject,User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ErrorModel } from 'src/app/models/error.model';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-card-user-detail',
  templateUrl: './card-user-detail.component.html',
  styleUrls: ['./card-user-detail.component.scss']
})
export class CardUserDetailComponent implements OnInit {
    usuario: UserUsuariosObject | undefined= {
    nombre: '',
    google: false,
    estado: false,
    uid: '',
    correo: '',
    rol: 'ADMIN_ROLE'
  }

  UserEdit: User = {
    nombre: '',
    correo: '',
    password: '',
    rol: 'ADMIN_ROLE'
  }

  id:string | null = '';
  constructor(
    private usersService:UsersService,
    private route: ActivatedRoute,
    private storeService:StoreService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.usersService.getAll()
    .subscribe({
      next: data => {
          this.route.paramMap.subscribe({
            next: data =>{
              this.id = data.get('id');
            }
          })
          this.usuario = data.usuarios.find(i => i.uid == this.id);
      }
    })
  }
  editar(){
    if(!this.UserEdit.nombre){
      this.UserEdit.nombre = this.usuario?.nombre || '';
    }

    if(!this.UserEdit.correo){
      this.UserEdit.correo = this.usuario?.correo || '';
    }

    this.usersService.edit(this.id || '',this.UserEdit)
    .subscribe({
      next: rta=>{
        let alert: ErrorModel[] = [];
        alert.push({
          msg: "Usuario editado correctamente!",
          type: 'success'
        })
        this.storeService.sendAlerts(alert);
        this.router.navigate(['/usuarios']);
      },
      error: e=>{
        let errors: ErrorModel[] = [];
        e.error.errors.map((err: ErrorModel)=>{
          errors.push({
            msg: err.msg,
            type: 'danger'
          });
        })
        this.storeService.sendAlerts(errors);
      }
    })
  }
}
