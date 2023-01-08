//hay diferentes modelos de usuario

//para hacer la creacion y ediccion
export interface User{
  nombre: string,
  correo: string,
  password: string,
  rol: string
}

export interface UserLogin extends Omit<User,'nombre' | 'rol'>{}


export interface UserResponse{
  usuario: User,
  nombre?: ''
}


//cuando se obtiene la resp del login
export interface UserLoginResponse{
  usuario: UserResponse,
  token: string
}

//cuando se obtiene al crear un usuario
export interface UserRegistered extends Omit<UserLogin, 'token'>{}


