import {
  mostrarProductos,
  productosMayores,
  productosConIva,
  ordenCreciente,
  agregarFinal,
  eliminarMenor,
} from "./funciones.js";
const productos = [
  { descripcion: "Auriculares inalámbricos", precio: 15.99 },
  { descripcion: "Teclado mecánico", precio: 59.99 },
  { descripcion: "Monitor LED 24", precio: 149.99 },
  { descripcion: "Silla ergonómica", precio: 199.99 },
  { descripcion: "Webcam HD", precio: 18.99 },
];

// 1 usar foreEach
mostrarProductos(productos);

// 2

// console.log("Productos mayores a $20:\n", productosMayores(productos, 20));

// 3

// productosConIva(productos);

// 4
// console.log(ordenCreciente(productos));

// 5

// agregar(productos);
// console.log(productos);

// 6
// console.log(productos);
// eliminarMenor(productos);
// console.log("Se elimino el producto mas barato\n", productos);
