"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const appError_1 = __importDefault(require("./errors/appError"));
const routes_1 = require("./routes");
exports.prisma = new client_1.PrismaClient();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(routes_1.routes);
exports.app.use((err, request, response, next) => {
    if (err instanceof appError_1.default) {
        return response.status(err.statusCode).send({ message: err.message });
    }
    console.log(err);
    return response.status(500).json({ message: 'Internal server Error' });
});
//# sourceMappingURL=index.js.map