import { Router } from "express";
import { createNewProduct, listAllProducts, listProductById, updateProductById, deleteProductById } from "../controllers/products";
import { createProductSchema } from "../validators/product.validator";

export const routes = Router()

routes.post('/products', createNewProduct)
routes.get('/products', listAllProducts)
routes.get('/products/:id', listProductById)
routes.patch('/products/:id', updateProductById)
routes.delete('/products/:id', deleteProductById)