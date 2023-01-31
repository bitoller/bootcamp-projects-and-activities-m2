import { newFilter, newFind, newMap, newReduce } from "../scripts/metodos.js";

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrString = [
  "batata",
  "pão",
  "coxinha",
  "churros",
  "carro",
  "tetris",
  "pessoa",
];
const arrProd = [
  {
    nome: "prod a",
    categoria: "x",
    preço: 2,
  },
  {
    nome: "prod b",
    categoria: "y",
    preço: 2,
  },
  {
    nome: "prod c",
    categoria: "z",
    preço: 2,
  },
  {
    nome: "prod d",
    categoria: "x",
    preço: 2,
  },
];

let controller1 = 0;

let controller2 = "";

describe("testando newMap", () => {
  test("testando em um array numérico [1, 2, 3], fazendo com que todos os elementos sejam multiplicados por 2 e esperando que o retorno seja [2, 4, 6]", () => {
    expect(
      newMap([1, 2, 3], (elem, index, arr) => {
        return elem * 2;
      })
    ).toStrictEqual([1, 2, 3].map((e) => e * 2));
  });

  test("testando em um array numérico [1, 2, 3] e fazendo com que concatene 'kenzie' a cada elemento, esperando que o retorno seja [1 Kenzie, 2 Kenzie, 3 Kenzie]", () => {
    expect(
      newMap([1, 2, 3], (elem, index, arr) => {
        return elem + " Kenzie";
      })
    ).toStrictEqual([1, 2, 3].map((e) => e + " Kenzie"));
  });

  test("testando com array vazio", () => {
    expect(
      newMap([], (elem, index, arr) => {
        return elem * 2;
      })
    ).toStrictEqual([].map((e) => e * 2));
  });
});

describe("testando newFilter", () => {
  test("testando em um array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e esperando que o array retornado contenha apenas os números pares [2, 4, 6, 8, 10]", () => {
    expect(
      newFilter(arrNumbers, (elem, index, arr) => {
        return elem % 2 === 0;
      })
    ).toStrictEqual(
      arrNumbers.filter((elem, index, arr) => {
        return elem % 2 === 0;
      })
    );
  });

  test("testando em um array de strings ['batata','pão','coxinha','churros','carro','tetris','pessoa',], e esperando que o array retornado contenha apenas as palavras com comprimento ímpar ['pão', 'coxinha', 'churros', 'carro']", () => {
    expect(
      newFilter(arrString, (elem, index, arr) => {
        return elem.length % 2 !== 0;
      })
    ).toStrictEqual(
      arrString.filter((elem, index, arr) => {
        return elem.length % 2 !== 0;
      })
    );
  });

  test("testando em um array de numeros [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e esperando que o array de retorni contenha os números menores ou iguais a 5 [1, 2, 3, 4, 5]", () => {
    expect(newFilter(arrNumbers, (e) => e <= 5)).toStrictEqual(
      arrNumbers.filter((e) => e <= 5)
    );
  });

  test("testando em um array de objetos [{nome: 'prod a', categoria: 'x', preço: 2,}, {nome: 'prod b', categoria: 'y', preço: 2,}, {nome: 'prod c', categoria: 'z', preço: 2, }, { nome: 'prod d', categoria: 'x', preço: 2, },] onde devem retornar os elementos que possuem a categoria x [{ nome: 'prod a', categoria: 'x', preço: 2 }, { nome: 'prod d', categoria: 'x', preço: 2 }]", () => {
    expect(newFilter(arrProd, (e) => e.categoria === "x")).toStrictEqual([
      {
        nome: "prod a",
        categoria: "x",
        preço: 2,
      },
      {
        nome: "prod d",
        categoria: "x",
        preço: 2,
      },
    ]);
  });

  test("testando em um array vazio", () => {
    expect(newFilter([], (e) => e > 2)).toStrictEqual([]);
  });
});

describe("testando newFind", () => {
  test("testando em um array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] onde deve retornar o número 7", () => {
    expect(newFind(arrNumbers, (e) => e === 7)).toStrictEqual(
      arrNumbers.find((e) => e === 7)
    );
  });

  test("testando em um array de strings ['batata','pão','coxinha','churros','carro','tetris','pessoa'] onde deve retornar a palavra 'churros'", () => {
    expect(newFind(arrString, (e) => e === "churros")).toStrictEqual(
      arrString.find((e) => e === "churros")
    );
  });

  test("testando em um array de ojetos [{nome: 'prod a', categoria: 'x', preço: 2,}, {nome: 'prod b', categoria: 'y', preço: 2,}, {nome: 'prod c', categoria: 'z', preço: 2, }, { nome: 'prod d', categoria: 'x', preço: 2, },] onde deve retornar o elemento de nome 'prod c': {nome: 'prod c', categoria: 'z', preço: 2, }", () => {
    expect(newFind(arrProd, (e) => e.nome === "prod c")).toStrictEqual(
      arrProd.find((e) => e.nome === "prod c")
    );
  });

  test("testando quando não encontra o elemento", () => {
    expect(newFind(arrProd, (e) => e.nome === "prod r")).toStrictEqual(undefined);
  });

  test("testando em um array vazio", () => {
    expect(newFind([], (e) => e === 3)).toStrictEqual(undefined);
  });
});

describe("testando newReduce", () => {
  test("testando em um array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] esperando que o retorno seja '55'", () => {
    expect(newReduce(arrNumbers, (acc, att) => acc + att)).toEqual(55);
  });

  test("testando em um array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] inicando o acumulador em 50 e esperando que o retorno seja 105", () => {
    expect(newReduce(arrNumbers, (acc, att) => acc + att, 50)).toStrictEqual(
      105
    );
  });

  test("testando em um array vazio", () => {
    expect(newReduce([], (acc, att) => acc + att, 0)).toStrictEqual(
      [].reduce((acc, att) => acc + att, 0)
    );
  });
});
