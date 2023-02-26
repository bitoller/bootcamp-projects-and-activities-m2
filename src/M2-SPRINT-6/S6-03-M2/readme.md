Atualizando um Array com Spread Operator e Destructuring

Introdução
Nessa atividade praticaremos conceitos avançados de desestruturação e spread operator com array. Utilizaremos essas duas ferramentas incríveis para manipular os dados de um array de objetos, então, bora lá!

Ambientação
Ao fazer um clone do código-fonte da aula você perceberá que teremos duas variáveis do tipo const, ambas contém um array que está dentro de uma instância de Object.freeze(), mas calma, é um array como qualquer outro. Como ele foi criado através do método freeze() nativo do JavaScript, ele virou um array literalmente congelado, ou seja, métodos que alteram os dados dentro dele não funcionam, como: push(), pop(), shift(), etc., porém, métodos de iteração de array como map(), forEach(), filter(), etc., funcionam normalmente. Essa é apenas uma maneira de incentivar o uso do spread operator e a desestruturação.

Resolvendo problemas
Nossa aplicação criará resultados esperados da manipulação de dados de usuários, lidaremos com dados sensíveis como senhas e, além disso, vamos moldar os dados conforme a necessidade de cada função, lembre-se dos conceitos do operador spread e de desestruturação, re-visite as aulas se necessário.

Adicionando endereços aos usuários

Nossas duas bases de dados estão separadas, a const usuarios e const enderecos, porém, não necessariamente queremos esses dados separados, o primeiro problema que teremos que resolver é atribuir o endereço correto a cada usuário.

Desenvolva sua lógica na função addAddresToUser:

//Adicionar endereços aos usuarios pelo id

function addAddresToUser() {
  // Sua lógica
}

Perceba que cada usuário tem uma propriedade id, e cada endereço tem uma propriedade chamada userId, que nada é que o id do usuário a qual esse endereço pertence, veja o resultado esperado:

[
  {​​
    email: "samu@kenzie.com",
​​    endereco: { rua: "Rua Quitino", bairro: "Nações", zipCode: "78120-000", … }​,
    id: 1,
​​    idade: 26,
    nome: "Samuel Persuhn",
    password: "51686aaasd2",
    stacks: [ "JavaScript", "PostgreSQL", "Node.js" ]
​​  },
  {
​​    email: "patrick@kenzie.com",
    endereco: { rua: "Avenida São Paulo", bairro: "Centro", zipCode: "45687-000", … },
​​    id: 2,
    idade: 22,
    nome: "Patrick Nekel",
    password: "supersenha123548",
    stacks: [ "JavaScript", "MongoDB", "Python" ]
​​  },
  {​​
    email: "samueleao@kenzie.com",
​​    endereco: { rua: "Avenida Brasil", bairro: "Centro", zipCode: "4587-000", … },
​​    id: 3,
    idade: 28,
    nome: "Samuel Leão",
    password: "hash*asdasda7788",
    stacks: [ "HTML5", "CSS3", "React.js" ]
​​  },
  {
​​    email: "danrley@kenzie.com",
    endereco: { rua: "Rua do videomaker", bairro: "Hollywood", zipCode: "44744-000", … },
​​    id: 4,
    idade: 30,
    nome: "Danrley",
    password: "889977",
    stacks: [ "VideoMaker", "Effects", "Roteirista" ]
​​  }
]

Escondendo as senhas

Muito bem, agora que temos uma função que atribui o endereço correto a cada usuário, precisamos desenvolver uma função que retire a propriedade password dos usuários, afinal, é um dado sensível e não queremos ele sendo listado.

Desenvolva sua lógica na função deletePassword:

//Adicionar endereços aos usuarios pelo id

function addAddresToUser() {
  // Sua lógica
}

Essa função receberá um usuário por vez e removerá a propriedade password desse usuário, há várias maneiras de fazer essa lógica, mas uma maneira bastante eficiente é desestruturar nos parâmetros de entrada da função.

Logo em seguida listaremos os usuários sem a senha, para isso desenvolva sua lógica na função listUsers, e não se esqueça de usar a função deletePassword para cada usuário e retornar todos os usuários com seus endereços corretos, porém, sem a senha!

//listar os usuarios sem a senha

function listUsers() {
  // Sua lógica
}

Veja o resultado esperado do retorno da função listUsers:

[
  {​​
    email: "samu@kenzie.com",
​​    endereco: { rua: "Rua Quitino", bairro: "Nações", zipCode: "78120-000", … }​,
    id: 1,
​​    idade: 26,
    nome: "Samuel Persuhn",
    stacks: [ "JavaScript", "PostgreSQL", "Node.js" ]
​​  },
  {
​​    email: "patrick@kenzie.com",
    endereco: { rua: "Avenida São Paulo", bairro: "Centro", zipCode: "45687-000", … },
​​    id: 2,
    idade: 22,
    nome: "Patrick Nekel",
    stacks: [ "JavaScript", "MongoDB", "Python" ]
​​  },
  {​​
    email: "samueleao@kenzie.com",
​​    endereco: { rua: "Avenida Brasil", bairro: "Centro", zipCode: "4587-000", … },
​​    id: 3,
    idade: 28,
    nome: "Samuel Leão",
    stacks: [ "HTML5", "CSS3", "React.js" ]
​​  },
  {
​​    email: "danrley@kenzie.com",
    endereco: { rua: "Rua do videomaker", bairro: "Hollywood", zipCode: "44744-000", … },
​​    id: 4,
    idade: 30,
    nome: "Danrley",
    stacks: [ "VideoMaker", "Effects", "Roteirista" ]
​​  }
]

Filtrando dados necessários

O próximo passo da nossa aplicação será listar apenas o nome, e-mail e as stacks de cada usuário, usar a desestruturação é essencial para criar a lógica de resolução deste problema. Crie sua lógica na função listUserStacks:

//listar somente nome, email e stack

function listUserStacks() {
  // Sua lógica
}

Observe o retorno esperado:

[
  {​​
    email: "samu@kenzie.com",
​​    nome: "Samuel Persuhn",
    stacks: [ "JavaScript", "PostgreSQL", "Node.js" ]
​​  },
  {
​​    email: "patrick@kenzie.com",
    nome: "Patrick Nekel",
    stacks: [ "JavaScript", "MongoDB", "Python" ]
​​  },
  {​​
    email: "samueleao@kenzie.com",
​​    nome: "Samuel Leão",
    stacks: [ "HTML5", "CSS3", "React.js" ]
​​  },
  {
​​    email: "danrley@kenzie.com",
    nome: "Danrley",
    stacks: [ "VideoMaker", "Effects", "Roteirista" ]
​​  }
]

Nada de Python

A última função da nossa aplicação será responsável por listar todos os usuários, exceto os que tem “Python” na propriedade stack, esse usuário não será mostrado. Além disso, a listagem dos usuários deve conter o endereço e não podem ter suas senhas expostas. Desenvolva sua lógica dentro da função deleteUser:

function deleteUser() {
  // Sua lógica
}

Veja o resultado esperado:

[
  {​​
    email: "samu@kenzie.com",
​​    endereco: { rua: "Rua Quitino", bairro: "Nações", zipCode: "78120-000", … }​,
    id: 1,
​​    idade: 26,
    nome: "Samuel Persuhn",
    stacks: [ "JavaScript", "PostgreSQL", "Node.js" ]
​​  },
  {​​
    email: "samueleao@kenzie.com",
​​    endereco: { rua: "Avenida Brasil", bairro: "Centro", zipCode: "4587-000", … },
​​    id: 3,
    idade: 28,
    nome: "Samuel Leão",
    stacks: [ "HTML5", "CSS3", "React.js" ]
​​  },
  {
​​    email: "danrley@kenzie.com",
    endereco: { rua: "Rua do videomaker", bairro: "Hollywood", zipCode: "44744-000", … },
​​    id: 4,
    idade: 30,
    nome: "Danrley",
    stacks: [ "VideoMaker", "Effects", "Roteirista" ]
​​  }
]


Conclusão
Essa atividade promoveu desafios na manipulação de dados dentro de arrays, entretanto, métodos como push(), pop(), shift() foram travados através do método Object.freeze(). Para desafiar e incentivar o uso de conceitos amplamente utilizado nos códigos de mercado, os quais são a desestruturação e spread operator, não se esqueça de pratica-los e utilizá-los em todas as atividades daqui para frente!