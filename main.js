import header from './components/header/headerComponent.js';
import seccion from './components/seccion1/seccion1Component.js';
import { item } from './components/modulos/item/itemModulo.js';


document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  if (app) {
    app.appendChild(header());
    app.appendChild(seccion());
  } else {
    console.error("No se encontró el elemento con id 'app'");
  }
});
