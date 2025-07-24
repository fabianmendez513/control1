import { header } from './components/header/headerComponent.js';

function seccion() {
    let seccion = document.createElement("section");
    
    let h1 = document.createElement("h1"); // <- Corregido
    h1.className = "titulo"; // <- Corregido
    h1.innerText = "Fabian ";
    seccion.appendChild(h1);

    let parrafo = document.createElement("p");
    parrafo.innerText = "Introduccion a Javascript";
    seccion.appendChild(parrafo);

    return seccion;
}

// Añade el header al contenedor
document.getElementById("contenedor-header").appendChild(header());

// Añade la sección al body
document.body.appendChild(seccion());