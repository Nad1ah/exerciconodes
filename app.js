const orders = [
  { id: "A658", status: "draft", products: ["T-Shirt", "Polo"] },
  { id: "A446", status: "processing", products: ["T-Shirt"] },
  { id: "A883", status: "draft", products: ["Polo", "Polo"] },
  { id: "A234", status: "processing", products: ["Camisa", "Saia"] },
  { id: "A754", status: "cancelled", products: ["Saia"] },
  { id: "A236", status: "shipped", products: ["Sweatshirt", "Vestido"] },
  { id: "A467", status: "processing", products: ["Camisa", "Saia"] },
  { id: "A213", status: "cancelled", products: ["Vestido", "Top"] },
  { id: "A783", status: "processing", products: ["T-Shirt", "Polo"] },
  { id: "A364", status: "shipped", products: ["T-Shirt", "Polo"] },
];
const tableBodyNode = document.querySelector("#table-body");

for (const order of orders) {
  const tr = document.createElement("tr");

  const id = document.createElement("td");
  id.textContent = order.id;
  const state = document.createElement("td");
  state.textContent = order.status;
  const product = document.createElement("td");

  tr.appendChild(id);
  tr.appendChild(state);
  tr.appendChild(product);

  tableBodyNode.appendChild(tr);

  if (order.status === "draft") {
    state.style.backgroundColor = "#2196f3";
  }
  if (order.status === "processing") {
    state.style.backgroundColor = "#ffc107";
  }
  if (order.status === "shipped") {
    state.style.backgroundColor = "#4caf50";
  }
  if (order.status === "cancelled") {
    state.style.backgroundColor = "#ff5722";
  }
  const ul = document.createElement("ul");

  for (const product of order.products) {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  }
  product.appendChild(ul);
}
