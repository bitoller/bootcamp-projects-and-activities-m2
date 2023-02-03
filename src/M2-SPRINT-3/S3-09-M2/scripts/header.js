function headerRender() {
  const header = document.querySelector("header");

  const logo = document.createElement("h1");
  const div = document.createElement("div");
  const productsLink = document.createElement("a");
  const footerLink = document.createElement("a");

  logo.innerText = "Papelaria";

  div.className = "links";
  productsLink.innerText = "Products";
  productsLink.href = "#products";
  footerLink.innerText = "Footer";
  footerLink.href = "#footer";

  div.appendChild(productsLink);
  div.appendChild(footerLink);
  header.appendChild(logo);
  header.appendChild(div);
}

headerRender();
