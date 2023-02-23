import * as yup from 'yup';
export declare const createProductSchema: yup.ObjectSchema<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    nome_do_produto: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    descricao_do_produto: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    preco: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    quantidade_em_estoque: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    imagem: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    nome_do_produto: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    descricao_do_produto: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    preco: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    quantidade_em_estoque: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    imagem: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<import("yup/lib/object").ObjectShape, {
    nome_do_produto: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    descricao_do_produto: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    preco: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    quantidade_em_estoque: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    imagem: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
}>>>;
