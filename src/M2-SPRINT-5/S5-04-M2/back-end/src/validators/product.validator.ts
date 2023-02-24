import * as yup from 'yup'

export const createProductSchema = yup.object().shape({
  nome_do_produto: yup.string().required('favor inserir o nome do produto em formato "string" no campo nome_do_produto'),
  descricao_do_produto: yup.string().required(`favor inserir a descrição do produto em formato 'string' no campo descricao_do_produto`),
  preco: yup.number().required(`favor inserir o valor do produto em formato 'number' no campo preco`),
  quantidade_em_estoque: yup.number().required(`favor inserir a quantidade existente do produto em estoque em formato 'number' no campo quantidade_em_estoque`),
  imagem: yup.string().required(`favor inserir a url da imagem em formato 'string' no campo imagem`).url(`favor inserir uma url de imagem válida`),
})