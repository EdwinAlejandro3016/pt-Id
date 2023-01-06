import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

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
  constructor() { }

  ngOnInit(): void {
  }

  sumbitRegister(){
    console.log(this.registerData);
  }

}
