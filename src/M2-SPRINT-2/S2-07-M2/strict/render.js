const ulTag = document.querySelector("ul");

function renderNewProduct(product) {
  ulTag.insertAdjacentHTML(
    "beforeend",
    `
        <li id=${`product-${product.id}`}>
            <img src=${product.image} alt=${product.name}>
            <div>
                <h3>${product.name}</h3>
                <p>${new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}</p>
            </div>
            <button onclick="removeProductFromCart(event)" id=${
              product.id
            }>X</button>
        </li>
    `
  );
}

function addRandomProductToCart() {
  if (cartList.length >= 8) return null;

  const randomIndex = Math.floor(Math.random() * (9 - 1) + 1);
  const randomProductInCart = cartList.some(
    (product) => product.id === randomIndex
  );

  if (!randomProductInCart) {
    const randomProduct = clothesList[randomIndex - 1];

    cartList.push(randomProduct);
    renderNewProduct(randomProduct);
  } else {
    addRandomProductToCart();
  }
}

const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addRandomProductToCart);

function removeProductFromCart(event) {
  const productIdDom = event.target.id;
  const productInCart = cartList.find((product) => product.id == productIdDom);
  const productRemoved = removeFromCart(productInCart)[0];

  if (productRemoved === productInCart) {
    const element = document.querySelector(`#product-${event.target.id}`);
    element && element.remove();
  } else if (!productRemoved) {
    console.error(
      "Algo não esta funcionando corretamente, o produto ainda existe no array cartList ou o retorno da função esta incorreto",
      cartList
    );
  }
}

function renderInitialProducts(cart) {
  cart.forEach((product) => {
    ulTag.insertAdjacentHTML(
      "beforeend",
      `
        <li id=${`product-${product.id}`}>
            <img src=${product.image} alt=${product.name}>
            <div>
                <h3>${product.name}</h3>
                <p>${new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}</p>
            </div>
            <button onclick="removeProductFromCart(event)" id=${
              product.id
            }>X</button>
        </li>
        `
    );
  });
}

renderInitialProducts(cartList);
