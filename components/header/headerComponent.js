export function header() {
  let contenedor = document.createElement("header");
  contenedor.classList.add("header");

  let titulo = document.createElement("h1");
  titulo.textContent = "@fimendez";

  let icono = document.createElement("div");
  icono.classList.add("icono");
  icono.textContent = "😊";


  contenedor.appendChild(titulo);
  contenedor.appendChild(icono);

  return contenedor;
}
