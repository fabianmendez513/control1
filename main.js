import { header } from "./components/header/headerComponent.js";
import { seccion } from "./components/seccion1/seccion1Component.js";

let app = document.getElementById("app");
app.appendChild(header());
app.appendChild(seccion());
