import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  submitLogin(){
    console.log(this.userData)
  }
}
