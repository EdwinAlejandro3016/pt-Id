import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

//models
import { UserLogin } from 'src/app/models/user.model';

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
  token = '';

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submitLogin(){
    this.authService.login(this.userData).
    subscribe(data=>{
      this.token = data.token;
      console.log(this.token);
    })
  }
}
