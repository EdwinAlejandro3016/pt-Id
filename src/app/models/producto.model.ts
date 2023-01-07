export interface Categoria {
  _id: number,
  nombre: string
}

export interface Producto {
  precio: number,
  _id: number,
  nombre: string,
  categoria: Categoria,
  usuario: string
}

export interface ProductsResponse {
  total: string,
  productos: Producto[]
}
