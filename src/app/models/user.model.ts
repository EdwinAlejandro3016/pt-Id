//hay diferentes modelos de usuario

//para hacer la creacion y ediccion
export interface User{
  nombre: String,
  correo: String,
  password: String,
  rol: String
}

export interface UserResponse extends Omit<User, 'password'>{
  estado: Boolean,
  google: Boolean,
  uuid: String
}


//cuando se obtiene del login
export interface UserLogin{
  usuario: UserResponse,
  token: String
}

//cuando se obtiene al crear un usuario
export interface UserRegistered extends Omit<UserLogin, 'token'>{}



