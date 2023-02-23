import { ICreateProduct, IResponseProduct } from "../interfaces";
export declare const createProduct: (data: ICreateProduct) => Promise<IResponseProduct>;
export declare const readProducts: () => Promise<IResponseProduct[]>;
export declare const readProductById: (id: string) => Promise<IResponseProduct>;
export declare const updateProduct: (id: string, data: ICreateProduct) => Promise<IResponseProduct>;
export declare const deleteProduct: (id: string) => Promise<IResponseProduct>;
