export default interface Categoria {
  _id: Number,
  nombre: String
}

export default interface Producto {
  precio: Number,
  _id: Number,
  nombre: String,
  categoria: Categoria,
  usuario: String
}
