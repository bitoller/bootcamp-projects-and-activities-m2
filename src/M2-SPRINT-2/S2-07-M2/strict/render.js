const ulTag = document.querySelector("ul");

function renderizaNovoProduto(produto) {
  ulTag.insertAdjacentHTML(
    "beforeend",
    `
        <li id=${`produto-${produto.id}`}>
            <img src=${produto.imagem} alt=${produto.nome}>
            <div>
                <h3>${produto.nome}</h3>
                <p>${new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(produto.preco)}</p>
            </div>
            <button onclick="removeProdutoDoCarrinho(event)" id=${
              produto.id
            }>X</button>
        </li>
    `
  );
}

function adicionaProdutoAleatorioAoCarrinho() {
  if (listaDoCarrinho.length >= 8) return null;

  const indexAleatorio = Math.floor(Math.random() * (9 - 1) + 1);
  const produtoAleatorioEstaNoCarrinho = listaDoCarrinho.some(
    (produto) => produto.id === indexAleatorio
  );

  if (!produtoAleatorioEstaNoCarrinho) {
    const produtoAleatorio = listaDeRoupas[indexAleatorio - 1];

    listaDoCarrinho.push(produtoAleatorio);
    renderizaNovoProduto(produtoAleatorio);
  } else {
    adicionaProdutoAleatorioAoCarrinho();
  }
}

const botaoAdicionar = document.querySelector("#botaoAdicionar");

botaoAdicionar.addEventListener("click", adicionaProdutoAleatorioAoCarrinho);

function removeProdutoDoCarrinho(event) {
  const idProdutoNaDOM = event.target.id;
  const produtoNoCarrinho = listaDoCarrinho.find(
    (produto) => produto.id == idProdutoNaDOM
  );
  const produtoRemovido = removeDoCarrinho(produtoNoCarrinho)[0];

  if (produtoRemovido === produtoNoCarrinho) {
    const element = document.querySelector(`#produto-${event.target.id}`);
    element && element.remove();
  } else if (!produtoRemovido) {
    console.error(
      "Algo não esta funcionando corretamente, o produto ainda existe no array listaDoCarrinho ou o retorno da função esta incorreto",
      listaDoCarrinho
    );
  }
}

function renderizaProdutosIniciais(carrinho) {
  carrinho.forEach((produto) => {
    ulTag.insertAdjacentHTML(
      "beforeend",
      `
        <li id=${`produto-${produto.id}`}>
            <img src=${produto.imagem} alt=${produto.nome}>
            <div>
                <h3>${produto.nome}</h3>
                <p>${new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(produto.preco)}</p>
            </div>
            <button onclick="removeProdutoDoCarrinho(event)" id=${
              produto.id
            }>X</button>
        </li>
        `
    );
  });
}

renderizaProdutosIniciais(listaDoCarrinho);
