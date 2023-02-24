"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataValidation = void 0;
const appError_1 = __importDefault(require("../errors/appError"));
const dataValidation = (data) => {
    if (typeof data.nome_do_produto !== 'string' || typeof data.descricao_do_produto !== 'string' || typeof data.imagem !== 'string') {
        throw new appError_1.default('favor verificar os campos: "nome_do_produto", "descricao_do_produto" e "imagem", estes campos aceitam apenas o formato "string"');
    }
    if (typeof data.preco !== 'number' || typeof data.quantidade_em_estoque !== 'number') {
        throw new appError_1.default('favor verificar os campos: "quantidade_em_estoque" e "preco", estes campos aceitam apenas o formato "number"');
    }
};
exports.dataValidation = dataValidation;
//# sourceMappingURL=inputValidator.js.map