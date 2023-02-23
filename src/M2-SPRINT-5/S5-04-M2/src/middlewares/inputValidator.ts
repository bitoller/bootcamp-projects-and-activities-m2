import AppError from "../errors/appError";
import {ICreateProduct} from '../interfaces'

export const dataValidation = (data: ICreateProduct) => {
  if (typeof data.nome_do_produto !== 'string' || typeof data.descricao_do_produto !== 'string' || typeof data.imagem !== 'string') {
    throw new AppError('favor verificar os campos: "nome_do_produto", "descricao_do_produto" e "imagem", estes campos aceitam apenas o formato "string"')
  }

  if (typeof data.preco !== 'number' || typeof data.quantidade_em_estoque !== 'number') {
    throw new AppError('favor verificar os campos: "quantidade_em_estoque" e "preco", estes campos aceitam apenas o formato "number"')
  }
}