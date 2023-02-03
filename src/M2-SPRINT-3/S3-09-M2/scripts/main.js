function mainRender() {
  const main = document.querySelector("main");

  main.id = "products";

  for (let i = 0; i < data.length; i++) {
    const card = createCard(data[i]);
    main.appendChild(card);
  }
}

function createCard(obj) {
  const div = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const price = document.createElement("p");
  const off = document.createElement("p");

  div.className = "card";
  title.innerText = obj.name;
  img.src = obj.image;
  price.innerText = obj.price;
  off.innerText = `Sale ${obj.off}% off`;

  if (obj.off > 0) {
    off.className = "saleOff";
  } else {
    off.className = "saleNone";
  }

  div.append(title, img, price, off);

  return div;
}

mainRender();
