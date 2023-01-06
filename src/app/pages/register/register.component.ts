import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';

//models
import { User, UserRegistered, UserResponse } from 'src/app/models/user.model';

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

  errors = [];
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  sumbitRegister(){
    this.usersService.create(this.registerData).
    subscribe((data: UserResponse)=>{
      console.log(data);
    })
  }

}
