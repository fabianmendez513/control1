import { header } from './components/header/headerComponent.js';

function seccion() {
    let seccion = document.createElement("section");
    
    let h1 = document.createElement("h1");
    h1.className = "titulo"; 
    h1.innerText = "Fabian ";
    seccion.appendChild(h1);

    let parrafo = document.createElement("p");
    parrafo.innerText = "Introduccion a Javascript";
    seccion.appendChild(parrafo);

    return seccion;
}

document.getElementById("contenedor-header").appendChild(header());

document.body.appendChild(seccion());
