import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';


//models
import { UserLogin } from 'src/app/models/user.model';
import { ErrorModel } from 'src/app/models/error.model';
import { StoreService } from 'src/app/services/store.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData:UserLogin = {
    correo: '',
    password: ''
  }

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private storeService:StoreService,
    private tokenService:TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLogin(){
    this.authService.login(this.userData).
    subscribe({
      next: data=>{
        this.tokenService.saveToken(data.token);
        let alert: ErrorModel[] = [];
        alert.push({
          msg: `Bienvenido ${data.usuario.nombre}!`,
          type: 'success'
        })
        this.storeService.sendAlerts(alert);
        this.router.navigate(['./productos']);
      },
      error: e=>{
        let errors: ErrorModel[] = [];
        errors.push({
          msg: e.error.msg,
          type: 'danger'
        })
        this.storeService.sendAlerts(errors);
      }
    })
  }
}
