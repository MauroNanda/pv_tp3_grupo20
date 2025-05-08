// 1

export const mostrarProductos = (productos) => {
  productos.forEach((p) => {
    console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
  });
};

// 2

export const productosMayores = (productos, n) => {
  return productos.filter((p) => p.precio > n);
};

// 3

export const productosConIva = (proIva) => {
  const pIva = proIva.map((preIva) => ({
    producto: preIva.descripcion,
    precioIva: (preIva.precio * 1.21).toFixed(2),
  }));
  console.log(pIva);
};

// 4

export const ordenCreciente = (productos) =>
  productos.sort((a, b) => a.precio - b.precio);

// 5

export const agregarFinal = (productos) =>
  productos.push({
    descripcion: "Parlante",
    precio: 59000.99,
  });

// 6

export const eliminarMenor = (productos) =>
  productos.shift(productos.sort((a, b) => a.precio - b.precio));
