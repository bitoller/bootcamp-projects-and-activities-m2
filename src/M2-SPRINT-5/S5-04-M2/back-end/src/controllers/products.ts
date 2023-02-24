import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";
import { dataValidation } from "../middlewares/inputValidator";
import { createProduct, deleteProduct, readProductById, readProducts, updateProduct } from "../services/products";

export const createNewProduct = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  try {
    dataValidation(data)

    const newProduct = await createProduct(data)

    return res.send(newProduct)
  } catch (error) {
    next(error)
  }
}

export const listAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await readProducts()

    return res.send(products)
  } catch (error) {
    next(error)
  }

}

export const listProductById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const product = await readProductById(id)

    return res.send(product)
  } catch (error) {
    next(error)
  }
}

export const updateProductById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const data = req.body

  try {

    dataValidation(data)

    const product = await updateProduct(id, data)

    return res.send({
      message: 'produto atualizado com sucesso',
      product
    })
  } catch (error) {
    next(error)
  }
}

export const deleteProductById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    await deleteProduct(id)

    return res.status(201).send({ message: 'Produto deletado com sucesso' })
  } catch (error) {
    next(error)
  }
}