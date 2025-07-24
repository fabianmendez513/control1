export function header() {
  let header = document.createElement("header");

  let titulo = document.createElement("h1");
  titulo.className = "titulo";
  titulo.innerText = "@fimendez";
  header.appendChild(titulo);

  let divLogo = document.createElement("div");
  divLogo.className = "div-logo";
  divLogo.innerText = "LOGO";
  header.appendChild(divLogo);

  return header;
}