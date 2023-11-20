const myAppNode = document.querySelector("#my-app");

const child = document.createElement("span");
child.textContent = `Elemento criado em ${new Date().toLocaleDateString("pt")}`;

setInterval(() => {
  (childNode.textContent = `Elemento criado em ${new Date().toLocaleDateString(
    "pt"
  )}`),
    1000;
});
