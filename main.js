function seccion(){
    
    let seccion = document.createElement("section");
    
    let h1 = document.createElement("h1");
    h1 classname = "titulo";
    h1.innerText = "Hola mundo ";
    seccion.appendChild(h1);

    let parrafo = document.createElement("p");
    parrafo.innerText = "Introduccion a Javascript";
    seccion.appendChild(parrafo);

    return seccion;
}

document.body.appendChild(seccion ());
