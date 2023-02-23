"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductSchema = void 0;
const yup = __importStar(require("yup"));
exports.createProductSchema = yup.object().shape({
    nome_do_produto: yup.string().required('favor inserir o nome do produto em formato "string" no campo nome_do_produto'),
    descricao_do_produto: yup.string().required(`favor inserir a descrição do produto em formato 'string' no campo descricao_do_produto`),
    preco: yup.number().required(`favor inserir o valor do produto em formato 'number' no campo preco`),
    quantidade_em_estoque: yup.number().required(`favor inserir a quantidade existente do produto em estoque em formato 'number' no campo quantidade_em_estoque`),
    imagem: yup.string().required(`favor inserir a url da imagem em formato 'string' no campo imagem`).url(`favor inserir uma url de imagem válida`),
});
//# sourceMappingURL=product.validator.js.map