import { createProduct } from './../services/products';

const test = async () => {

    const data = {
        nome_do_produto: "Cadeira Gamersss",
	descricao_do_produto: "Cadeira Gamer com led RGB",
	preco: 1999.99,
	quantidade_em_estoque: 20,
	imagem: "https://images.tcdn.com.br/img/img_prod/740836/cadeira_gamer_concordia_gm3_rgb_com_controle_e_powerbank_10803_1_20a776245ed6e9b1bd655072771901e6.png"
    }

    await createProduct(data)
}

test()