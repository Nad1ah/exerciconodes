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
    state.style.color = "blue";
  }
  if (order.status === "processing") {
    state.style.color = "yellow";
  }
  if (order.status === "shipped") {
    state.style.color = "green";
  }
  if (order.status === "cancelled") {
    state.style.color = "red";
  }
  const ul = document.createElement("ul");

  for (const product of order.products) {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  }
  product.appendChild(ul);
}
