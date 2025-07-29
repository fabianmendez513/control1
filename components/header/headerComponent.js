export function header() {
  let header = document.createElement("header");

  let titulo = document.createElement("h1");
  title.className = "title";
  title.innerText = "@fimendez";
  header.appendChild(title);

  let divLogo = document.createElement("div");
  divLogo.className = "div-logo";
  header.appendChild(divLogo);

  let img = document.createElement("img");
  img.className ="logo";
  img.src ="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uwTXeoRua-yoEcS-HY40QgHaHa%3Fpid%3DApi&f=1&ipt=3b8f8a4505c27e1a221af589675255308bfd69266620489812a1be6e2e541b6c&ipo=images =="
  header.appendChild(img);




  return header;
}