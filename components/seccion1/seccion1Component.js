import { item } from "../modulos/item/itemModulo.js";

export function seccion() {
  let seccion = document.createElement("section");
  seccion.className = "seccion-1";

  seccion.appendChild(item("1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.sPYFTBuEDyjOSUQFp9Qg_wHaGE%3Fpid%3DApi&f=1&ipt=27490074f995882ba6ceddde3ec6fab97821b6799de1d9e62d3cbd4cf1c8df1b&ipo=images"));
  seccion.appendChild(item("2", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagenes.elpais.com%2Fresizer%2FV-jLFDuAHZ2El3CO9MsYfm-hiJ8%3D%2F1200x0%2Farc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com%2Fpublic%2FAU32B7F6HD3H27WAR6AFXMANCU.jpg&f=1&nofb=1&ipt=3e1e9c2c97d0edc32513b0ebcd97d8e788f0dba59fd5d73799a25d23d91ce141"));
  seccion.appendChild(item("3", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fg%2Fgatito_bebe_color_miel.jpg&f=1&nofb=1&ipt=9f42bf95f8422fed7721138bf279831fbbc4c1e16dd9878c72409862c48adc34"));
  seccion.appendChild(item("4", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcb%2Fce%2Fe1%2Fcbcee1c3583c882b95652db2fe511ddd.jpg&f=1&nofb=1&ipt=cfa48ff4bb93b47842f07db505dc767a3d340a102e766a5097498ff8dfb8a368"));

  return seccion;
}
