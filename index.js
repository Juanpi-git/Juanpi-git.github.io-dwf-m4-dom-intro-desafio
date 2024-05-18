const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  //selecciono la lista mediante su clase(.lista), y los items dentro de ella mediante su etiqueta(li)
  const ulEl = document.querySelector(".lista");
  const liEl = document.querySelectorAll("li");
  console.log(ulEl);
  console.log(liEl);

  //elimino los items dentro de la lista
  liEl.forEach((e) => {
    ulEl.removeChild(e);
  });

  //creo los nuevos items
  for (let i = 0; i < cosasQueAprendimos.length; i++) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = cosasQueAprendimos[i].tema;
    newLiEl.setAttribute("class", `${cosasQueAprendimos[i].class}`);
    ulEl.appendChild(newLiEl);
  }
}

main();
