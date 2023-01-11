import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorModel } from 'src/app/models/error.model';
import { User, UserUsuariosObject } from 'src/app/models/user.model';
import { StoreService } from 'src/app/services/store.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})

export class CardUserComponent implements OnInit {
  @Input() usuario: UserUsuariosObject = {
    nombre: '',
    correo: '',
    estado: false,
    google: false,
    uid: '',
    rol: 'ADMIN_ROLE'
  }

  constructor(
    private usersService: UsersService,
    private storeService:StoreService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }



  onDelete(uid:string,nombre:string){
    if(!confirm(`Estas seguro de Eliminar el usuario ${nombre}`)){
      return;
    }
    this.usersService.delete(uid)
    .subscribe({
      next: rta=>{
        console.log(rta);
        let alert: ErrorModel[] = [];
        alert.push({
          msg: "Usuario eliminado correctamente!",
          type: 'danger'
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
