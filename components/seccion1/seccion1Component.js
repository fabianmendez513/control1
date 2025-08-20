import { item } from "../modulos/item/itemModulo.js";
import { productos } from "./database/productos.js";

export function seccion() {
  let seccion = document.createElement("section");
  seccion.className = "seccion-1";

  const listaProductos = productos(); // obtenemos el array de productos

  listaProductos.forEach(producto => {
    // pasamos solo el título y la imagen a la función item()
    seccion.appendChild(item(producto.title, producto.image));
  });

  return seccion;
}
