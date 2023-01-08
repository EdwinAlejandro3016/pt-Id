import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

//models
import { User, UserRegistered, UserResponse } from 'src/app/models/user.model';
import { ErrorModel } from 'src/app/models/error.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData: User = {
    nombre: '',
    correo: '',
    password: '',
    rol: 'ADMIN_ROLE'
  }

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private storeService:StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sumbitRegister(){
    this.usersService.create(this.registerData).
    subscribe({
      next: (user: UserResponse)=>{
        console.log(user)
        let alert: ErrorModel[] = [];
        alert.push({
          msg: `Bienvenido ${user.usuario.nombre}!`,
          type: 'success'
        });
        this.storeService.sendAlerts(alert);
        this.router.navigate(['./productos']);
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
