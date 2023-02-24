"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const products_1 = require("../controllers/products");
exports.routes = (0, express_1.Router)();
exports.routes.post('/products', products_1.createNewProduct);
exports.routes.get('/products', products_1.listAllProducts);
exports.routes.get('/products/:id', products_1.listProductById);
exports.routes.patch('/products/:id', products_1.updateProductById);
exports.routes.delete('/products/:id', products_1.deleteProductById);
//# sourceMappingURL=index.js.map