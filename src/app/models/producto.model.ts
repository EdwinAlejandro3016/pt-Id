export interface Categoria {
  _id: string,
  nombre: string
}
export interface UsuarioCategoria {
  _id: string,
  nombre: string
}

export interface CategoriaResponse extends Categoria{
  usuario: UsuarioCategoria
}

export interface Categorias{
  total: number,
  categorias: Categoria[]
}

export interface Producto {
  precio: number,
  _id: string,
  nombre: string,
  categoria: Categoria,
  usuario: string
}

export interface crearProduct{
  nombre: string,
  precio: number,
  categoriaID: string
}

export interface ProductoEditBody{
  nombre: string,
  _id: string,
  precio: number,
  categoriaID: string
}

export interface ProductsResponse {
  total: string,
  productos: Producto[]
}
