export function item(titulo) {
  const div = document.createElement("div");
  div.classList.add("item");
  div.textContent = titulo;

  div.addEventListener("click", () => {
    div.classList.toggle("destacado");
  });

  return div;
}
