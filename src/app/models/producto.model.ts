export interface Categoria {
  _id: Number,
  nombre: String
}

export interface Producto {
  precio: Number,
  _id: Number,
  nombre: String,
  categoria: Categoria,
  usuario: String
}
