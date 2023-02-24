const url = "http://localhost:3333";

async function addNewProduct(product) {
  const newProduct = await fetch(`${url}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

addNewProduct({
  nome_do_produto: "Churros",
  descricao_do_produto: "Cadeira Gamer com led RGB",
  preco: 1999.99,
  quantidade_em_estoque: 20,
  imagem:
    "https://images.tcdn.com.br/img/img_prod/740836/cadeira_gamer_concordia_gm3_rgb_com_controle_e_powerbank_10803_1_20a776245ed6e9b1bd655072771901e6.png",
});

async function getAllProducts() {}

//getAllProducts();

async function getProductById(id) {}

//getProductById();

async function attProductById(id) {}

//attProductById();

async function deleteProductById(id) {}

//deleteProductById();
