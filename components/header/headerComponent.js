export function header() {
  let contenedor = document.createElement("header");
  contenedor.classList.add("header");

  let titulo = document.createElement("h1");
  titulo.textContent = "Fabian";

  let icono = document.createElement("div");
  icono.classList.add("icono");

  contenedor.appendChild(titulo);
  contenedor.appendChild(icono);

  return contenedor;
}
