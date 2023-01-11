//hay diferentes modelos de usuario

//para hacer la creacion y ediccion
export interface User{
  nombre: string,
  correo: string,
  password: string,
  rol: 'ADMIN_ROLE'
}

//interface cuando traigo todos los usuarios
export interface UserUsuariosObject extends Omit<User,'password'>{
  estado: boolean,
  google: boolean,
  uid: string
}

//array de usuarios
export interface UserUsuariosAll{
  usuarios: UserUsuariosObject[];
  total: number
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




