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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.readProductById = exports.readProducts = exports.createProduct = void 0;
const __1 = require("..");
const appError_1 = __importDefault(require("../errors/appError"));
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield __1.prisma.product.findUnique({
        where: {
            nome_do_produto: data.nome_do_produto
        }
    });
    if (product) {
        throw new appError_1.default('nome_do_produto já cadastrado, impossível cadastrar dois produtos com o mesmo nome');
    }
    return yield __1.prisma.product.create({
        data: {
            nome_do_produto: data.nome_do_produto,
            descricao_do_produto: data.descricao_do_produto,
            preco: data.preco,
            quantidade_em_estoque: data.quantidade_em_estoque,
            imagem: data.imagem
        }
    });
});
exports.createProduct = createProduct;
const readProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield __1.prisma.product.findMany();
});
exports.readProducts = readProducts;
const readProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield __1.prisma.product.findUnique({
        where: {
            id
        }
    });
    if (!product) {
        throw new appError_1.default('produto não encontrado, por favor informe um id válido', 404);
    }
    return product;
});
exports.readProductById = readProductById;
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const checkProduct = yield __1.prisma.product.findUnique({
        where: {
            id
        }
    });
    if (!checkProduct) {
        throw new appError_1.default('produto não encontrado, por favor informe um id válido', 404);
    }
    const checkName = yield __1.prisma.product.findUnique({
        where: {
            nome_do_produto: data.nome_do_produto
        }
    });
    if (checkName) {
        throw new appError_1.default('nome_do_produto já cadastrado, favor informar outro nome_do_produto válido', 401);
    }
    return yield __1.prisma.product.update({
        where: {
            id
        },
        data
    });
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const checkProduct = yield __1.prisma.product.findUnique({
        where: {
            id
        }
    });
    if (!checkProduct) {
        throw new appError_1.default('produto não encontrado, por favor informe um id válido', 404);
    }
    return yield __1.prisma.product.delete({
        where: {
            id
        }
    });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map