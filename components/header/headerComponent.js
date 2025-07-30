export default function header() {
  const contenedor = document.createElement("header");
  contenedor.classList.add("header");

  const titulo = document.createElement("h1");
  titulo.textContent = "Fabian";

  const icono = document.createElement("div");
  icono.classList.add("icono");

  contenedor.appendChild(titulo);
  contenedor.appendChild(icono);

  return contenedor;
}
