import { Component, OnInit } from '@angular/core';
import { User, UserUsuariosAll, UserUsuariosObject } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: UserUsuariosObject[] = [];

  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getAll()
    .subscribe({
      next: data=>{
        this.usuarios = data.usuarios;
        this.usersService.usuarios = data.usuarios;
      },
      error: e=>{
        console.log(e);
      }
    })
    this.usersService.myUsuarios$.subscribe(data=>{
      this.usuarios = data;
    });
  }

}
