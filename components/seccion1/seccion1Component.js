import { item } from '../modulos/item/itemModulo.js';

export default function seccion() {
  const seccion = document.createElement("section");
  seccion.classList.add("seccion");

  // Primera fila
  const fila1 = document.createElement("div");
  fila1.classList.add("fila");
  fila1.appendChild(item("Opción 1"));
  fila1.appendChild(item("Opción 2"));

  // Segunda fila
  const fila2 = document.createElement("div");
  fila2.classList.add("fila");
  fila2.appendChild(item("Opción 3"));
  fila2.appendChild(item("Opción 4"));

  // Agregar filas a la sección
  seccion.appendChild(fila1);
  seccion.appendChild(fila2);

  // Botón final
  const boton = document.createElement("button");
  boton.textContent = "git hub";
  boton.classList.add("github-btn");
  seccion.appendChild(boton);

  return seccion;
}
