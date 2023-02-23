import { prisma } from "..";
import AppError from "../errors/appError";
import { ICreateProduct, IResponseProduct } from "../interfaces";

export const createProduct = async (data: ICreateProduct): Promise<IResponseProduct> => {
  const product = await prisma.product.findUnique({
    where: {
      nome_do_produto: data.nome_do_produto
    }
  })

  if(product) {
    throw new AppError('nome_do_produto já cadastrado, impossível cadastrar dois produtos com o mesmo nome')
  }

  return await prisma.product.create({
    data: {
      nome_do_produto: data.nome_do_produto,
      descricao_do_produto: data.descricao_do_produto,
      preco: data.preco,
      quantidade_em_estoque: data.quantidade_em_estoque,
      imagem: data.imagem
    }
  })

  
}

export const readProducts = async (): Promise<IResponseProduct[]> => {
  return await prisma.product.findMany()
}

export const readProductById = async (id: string): Promise<IResponseProduct> => {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })

  if(!product) {
    throw new AppError('produto não encontrado, por favor informe um id válido', 404)
  }

  return product
}

export const updateProduct = async (id: string, data:ICreateProduct): Promise<IResponseProduct> => {
  const checkProduct = await prisma.product.findUnique({
    where: {
      id
    }
  })

  if(!checkProduct) {
    throw new AppError('produto não encontrado, por favor informe um id válido', 404)
  }

  const checkName = await prisma.product.findUnique({
    where: {
      nome_do_produto: data.nome_do_produto
    }
  })

  if(checkName) {
    throw new AppError('nome_do_produto já cadastrado, favor informar outro nome_do_produto válido', 401)
  }

  return await prisma.product.update({
    where: {
      id
    },
    data
  })

  
}

export const deleteProduct = async (id: string): Promise<IResponseProduct> => {
  const checkProduct = await prisma.product.findUnique({
    where: {
      id
    }
  })

  if(!checkProduct) {
    throw new AppError('produto não encontrado, por favor informe um id válido', 404)
  }

  return await prisma.product.delete({
    where: {
      id
    }
  })
}