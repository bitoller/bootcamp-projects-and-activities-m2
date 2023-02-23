"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.listProductById = exports.listAllProducts = exports.createNewProduct = void 0;
const inputValidator_1 = require("../middlewares/inputValidator");
const products_1 = require("../services/products");
const createNewProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        (0, inputValidator_1.dataValidation)(data);
        const newProduct = yield (0, products_1.createProduct)(data);
        return res.send(newProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.createNewProduct = createNewProduct;
const listAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, products_1.readProducts)();
        return res.send(products);
    }
    catch (error) {
        next(error);
    }
});
exports.listAllProducts = listAllProducts;
const listProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield (0, products_1.readProductById)(id);
        return res.send(product);
    }
    catch (error) {
        next(error);
    }
});
exports.listProductById = listProductById;
const updateProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        (0, inputValidator_1.dataValidation)(data);
        const product = yield (0, products_1.updateProduct)(id, data);
        return res.send({
            message: 'produto atualizado com sucesso',
            product
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateProductById = updateProductById;
const deleteProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, products_1.deleteProduct)(id);
        return res.status(201).send({ message: 'Produto deletado com sucesso' });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProductById = deleteProductById;
//# sourceMappingURL=products.js.map