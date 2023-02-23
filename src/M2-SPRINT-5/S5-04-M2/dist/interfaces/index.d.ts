export interface ICreateProduct {
    nome_do_produto: string;
    descricao_do_produto: string;
    preco: number;
    quantidade_em_estoque: number;
    imagem: string;
}
export interface IResponseProduct {
    id: string;
    nome_do_produto: string;
    descricao_do_produto: string;
    preco: number;
    quantidade_em_estoque: number;
    imagem: string;
}
