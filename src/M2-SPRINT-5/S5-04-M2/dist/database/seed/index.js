"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../../services/products");
const products = [
    {
        "nome_do_produto": "Headset Gamer",
        "descricao_do_produto": "Headset gamer para conversar com seus amigos durante seus jogos",
        "preco": 199.99,
        "quantidade_em_estoque": 100,
        "imagem": "https://images.kabum.com.br/produtos/fotos/102770/headset-gamer-havit-drivers-53mm-hv-h2002d_headset-gamer-havit-drivers-53mm-hv-h2002d_1564056874_original.jpg"
    },
    {
        "nome_do_produto": "Cadeira Gamer",
        "descricao_do_produto": "Cadeira gamer com led RGB",
        "preco": 1999.99,
        "quantidade_em_estoque": 20,
        "imagem": "https://images.tcdn.com.br/img/img_prod/740836/cadeira_gamer_concordia_gm3_rgb_com_controle_e_powerbank_10803_1_20a776245ed6e9b1bd655072771901e6.png"
    },
    {
        "nome_do_produto": "Teclado",
        "descricao_do_produto": "Teclado mecanico branco com led RGB",
        "preco": 699.99,
        "quantidade_em_estoque": 50,
        "imagem": "https://a-static.mlcdn.com.br/800x560/teclado-mecanico-gamer-husky-gaming-blizzard-branco-60-switch-gateron-red-abnt2-rgb-hgmo001/kabum/114587/aee73fee49660fe175b615704d8dc6d4.jpeg"
    },
    {
        "nome_do_produto": "PS5",
        "descricao_do_produto": "Playstation 5 + Horizon Forbidden West",
        "preco": 4464.06,
        "quantidade_em_estoque": 5,
        "imagem": "https://m.media-amazon.com/images/I/71A+sWU7zAL._AC_SL1500_.jpg"
    },
    {
        "nome_do_produto": "Notebook Gamer",
        "descricao_do_produto": "Notebook Gamer Acer Nitro 5 Intel Core i7 8GB - 512GB SSD 15,6” FULL HD NVIDIA GeForce GTX 1650",
        "preco": 4399.12,
        "quantidade_em_estoque": 3,
        "imagem": "https://a-static.mlcdn.com.br/800x560/notebook-gamer-acer-nitro-5-intel-core-i7-8gb-512gb-ssd-156-full-hd-nvidia-geforce-gtx-1650/magazineluiza/233854400/d784178188b6dfb25023a71512ad0573.jpg"
    }
];
const seed = (array) => {
    array.forEach(product => {
        (0, products_1.createProduct)(product);
    });
};
seed();
//# sourceMappingURL=index.js.map