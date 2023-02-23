JavaScript: Manipulando Token parte 1
Tópicos do conteúdo
Introdução
Nessa atividade, iremos utilizar uma API de receitas e iremos aprender como acessar rotas que necessitam de autenticação, ou seja, rotas onde somente usuários cadastrados e logados tem acesso. Para isso, iremos utilizar o headers de nossa requisição.

Repositório base

Acessar repositório base

Headers
Através do headers(cabeçalho), podemos passar informações adicionais na nossa requisição. Existem várias propriedades que podem ser passadas dentro do headers, mas, hoje, iremos aprender especificamente duas delas:

Content-Type: Propriedade que indica qual tipo de dado está sendo enviado. Nessa atividade, iremos utilizar o tipo "application/json", pois estaremos enviando dados no formato json.
Authorization: Propriedade onde é passado o token de autenticação que recebemos quando o login é realizado. Sem essa propriedade, a API não consegue saber se temos a autorização necessária para acessar certas rotas. Iremos verificar sua utilização, de forma mais clara, ao longo dessa atividade.
Vamos para o código?

Iniciando nosso código
Nesta atividade, iremos criar uma model no arquivo Api.js, chamada Api, para centralizarmos o nosso código.

GET / recipe
Como vamos acessar sempre a mesma API nessa atividade, alterando apenas sua rota, para evitar repetição de códigos, vamos armazenar a base da URL em uma variável, no inicio do arquivo api.js

const baseURL = "https://m2-api-token.herokuapp.com";

Agora, vamos criar a função que irá acessar a rota pública /recipe, onde se encontram todas as receitas existentes dentro da api:

export async function getPublic() {
const recipes = await fetch(`${baseURL}/recipe`, {
method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
headers: {
"Content-Type": "application/json", // Indica o tipo de dado da requisição
},
})
.then((response) => response.json())
.then((reposonseJson) => reposonseJson);
return recipes;
}

GET /recipe/user
Dentro da api, também existe a rota protegida /recipe/user, onde estão as receitas específicas de cada um dos usuários. Vamos criar um método para acessar essa rota.

Utilize o método para ver qual será a resposta recebida quando não estamos passando a autorização necessária para acessar essa rota.

export async function getPrivate() {
const recipes = await fetch(`${baseURL}/recipe/user`, {
method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
headers: {
"Content-Type": "application/json", // Indica o tipo de dado da requisição
},
})
.then((response) => response.json())
.then((reposonseJson) => reposonseJson);
return recipes;
}

Foi demonstrado que, sem a autorização, nos gera um erro de autenticação, ou melhor, um erro por não ter um token de acesso. Porém, para conseguirmos um token, precisaremos estar cadastrados na plataforma.

POST /auth/register
Dentro da nossa API, iremos criar outro método, chamado createUser, onde iremos fazer nosso registo. Para isso, precisamos de um body adequado para podermos realizar o cadastro. Esse body deverá conter as seguintes informações: name, email e password, que serão um objeto, passado através de um parâmetro nesse método, da seguinte forma:

export async function createUser(data) {
const response = await fetch(`${baseURL}/auth/register`, {
method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
headers: {
"Content-Type": "application/json", // Indica o tipo de dado da requisição
},
body: JSON.stringify(data), // Informando as informações do usuário
})
.then((response) => response.json())
.then((reposonseJson) => reposonseJson)
.catch((error) => error);

return response;
}

Nossa requisição usará, como base, esse body abaixo. Coloque suas informações nos campos correspondentes:

{
name: "NewName",
email: "meu_Email@email.com",
password: "3421!"
}

Lembre de criar apenas um usuário e lembrar da senha do mesmo, para evitar super lotação de dados no banco.

POST /auth/login
Agora que temos um usuário cadastrado na plataforma, podemos nos logar no servidor e, assim, receber um token de acesso. Esse token nos permitirá manipular a API. Para isso, precisaremos fazer outra requisição, do tipo POST, pelo endpoint /auth/login, passando nosso email e password anteriormente cadastrados.

Criaremos, agora, dois novos elementos:

Uma propriedade estática, dessa classe, com o nome de token; e,
Outro método, chamado login, que receberá o nosso body por parâmetro.
let globalToken = "" // indicado colocar no inicio do script

export async function login(data) {
const tokenAPI = await fetch(
"https://m2-api-token.herokuapp.com/auth/login",
{
method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
headers: {
"Content-Type": "application/json", // Indica o tipo de dado da requisição
},
body: JSON.stringify(data), // Informando as informações do usuário
}
)
.then((response) => response.json())
.then((responseJson) => responseJson)
.catch((error) => error);

globalToken = tokenAPI; // Sempre que fizermos a requisição nosso token será atualizado

return globalToken;
}

Atualizando a função getPrivate
Agora que estamos registrados, logados e autenticados, podemos começar a fazer as requisições que precisam do token.

Lembra daquela função, chamado getPrivate, que estava dando erro, pois não tínhamos permissão para acessar a rota? Agora, isso irá mudar ao adicionarmos um token, dessa forma:

"Authorization": `Bearer ${globalToken}` // Adicionamos um token de acesso validado pelo header Authorization

Após adicionar esse token no Header, a função ficará dessa forma:

export async function getPrivate() {
const recipes = await fetch(`${baseURL}/recipe/user`, {
method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
headers: {
"Content-Type": "application/json", // Indica o tipo de dado da requisição
Authorization: `Bearer ${globalToken}`, // Adicionamos um token de acesso validado pelo header Authorization
},
})
.then((response) => response.json())
.then((reposonseJson) => reposonseJson);
return recipes;
}

Logicamente, iremos receber apenas um elemento vazio, afinal, acabamos de criar o usuário e não criamos nenhuma receita. Iremos criar as receitas na segunda parte dessa atividade.
