import { item } from "../modulos/item/itemModulo.js";
import { productos } from "../database/productos.js";

export function seccion() {
  let seccion = document.createElement("section");
  seccion.className = "seccion-1";

  let listaProductos = productos();

  listaProductos.forEach(producto => {
    seccion.appendChild(item(producto.title, producto.image));
  });

  return seccion;
}
