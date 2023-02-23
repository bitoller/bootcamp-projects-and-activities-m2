<h1>JavaScript: Manipulando Token</h1>

<h3>Introdução</h3>
Nessa atividade, iremos utilizar uma API de receitas e iremos aprender como acessar rotas que necessitam de autenticação, ou seja, rotas onde somente usuários cadastrados e logados tem acesso. Para isso, iremos utilizar o headers de nossa requisição.

<h3>Headers</h3>
Através do headers(cabeçalho), podemos passar informações adicionais na nossa requisição. Existem várias propriedades que podem ser passadas dentro do headers, mas, hoje, iremos aprender especificamente duas delas:

Content-Type: Propriedade que indica qual tipo de dado está sendo enviado. Nessa atividade, iremos utilizar o tipo "application/json", pois estaremos enviando dados no formato json.
Authorization: Propriedade onde é passado o token de autenticação que recebemos quando o login é realizado. Sem essa propriedade, a API não consegue saber se temos a autorização necessária para acessar certas rotas. Iremos verificar sua utilização, de forma mais clara, ao longo dessa atividade.

Vamos para o código?

<h3>Iniciando nosso código</h3>
Nesta atividade, iremos criar uma model no arquivo Api.js, chamada Api, para centralizarmos o nosso código.

<h3>GET / recipe</h3>
Como vamos acessar sempre a mesma API nessa atividade, alterando apenas sua rota, para evitar repetição de códigos, vamos armazenar a base da URL em uma variável, no inicio do arquivo api.js

Agora, vamos criar a função que irá acessar a rota pública /recipe, onde se encontram todas as receitas existentes dentro da api

<h3>GET /recipe/user</h3>
Dentro da api, também existe a rota protegida /recipe/user, onde estão as receitas específicas de cada um dos usuários. Vamos criar um método para acessar essa rota.

Utilize o método para ver qual será a resposta recebida quando não estamos passando a autorização necessária para acessar essa rota.

Foi demonstrado que, sem a autorização, nos gera um erro de autenticação, ou melhor, um erro por não ter um token de acesso. Porém, para conseguirmos um token, precisaremos estar cadastrados na plataforma.

<h3>POST /auth/register</h3>
Dentro da nossa API, iremos criar outro método, chamado createUser, onde iremos fazer nosso registo. Para isso, precisamos de um body adequado para podermos realizar o cadastro. Esse body deverá conter as seguintes informações: name, email e password, que serão um objeto, passado através de um parâmetro nesse método

Nossa requisição usará, como base, esse body abaixo.

Lembre de criar apenas um usuário e lembrar da senha do mesmo, para evitar super lotação de dados no banco.

<h3>POST /auth/login</h3>
Agora que temos um usuário cadastrado na plataforma, podemos nos logar no servidor e, assim, receber um token de acesso. Esse token nos permitirá manipular a API. Para isso, precisaremos fazer outra requisição, do tipo POST, pelo endpoint /auth/login, passando nosso email e password anteriormente cadastrados.

Criaremos, agora, dois novos elementos:

Uma propriedade estática, dessa classe, com o nome de token; e,
Outro método, chamado login, que receberá o nosso body por parâmetro.

<h3>Atualizando a função getPrivate</h3>
Agora que estamos registrados, logados e autenticados, podemos começar a fazer as requisições que precisam do token.

Lembra daquela função, chamado getPrivate, que estava dando erro, pois não tínhamos permissão para acessar a rota? Agora, isso irá mudar ao adicionarmos um token

Logicamente, iremos receber apenas um elemento vazio, afinal, acabamos de criar o usuário e não criamos nenhuma receita.

Agora, iremos adicionar mais 3 métodos com o token:

- Criar uma receita (POST)
- Editar essa receita (PATCH)
- Deletar a receita (DELETE)

Lembrando que, devido à proteção da API, só poderemos fazer isso se já estivermos cadastrados e possuirmos um token de acesso.

<h3>POST /recipe/user</h3>
Para criamos uma receita, temos que entender quais são seus dados de entrada:

- name: Nome que daremos à receita, do tipo String
- ingredients: Todos os ingredientes que serão necessários para fazer essa receita, em forma de ARRAY de strings
- description: Descrição sobre essa receita, do tipo String

Agora que sabemos o que precisamos para criar uma receita, iremos fazer uma básica: uma receita de batata cozida que leva apenas água quente, batata e sal.

Naquele mesmo arquivo chamado api.js, crie uma função chamada createRecipe e passe o token de acesso a esse método

Todos os dados devem ser passados do mesmo jeito que foi dado no exemplo acima. Caso algum dado esteja incorreto, retornará um erro 400 - BAD REQUEST.

Porém, se tudo foi passado corretamente, e validado, retornará um dado com as informações criadas, o id da receita, e mais outras informações.

<h3>PATCH /recipe/user/:id</h3>
O método Patch serve para fazer uma ou mais alterações em algum dado. Ou seja, na receita, temos 3 dados: name, ingredients e description.

Precisamos passar, pelo body, pelo menos um desses dados. Caso seja necessário, podemos passar dois ou os três dados de uma vez.

Porém, no fim da url, onde temos o :id, iremos trocar para um identificador que temos. Veja, na resposta da requisição de criação, qual o id do seu produto e troque por ele. Assim, só iremos editar o produto cujo o id bater com o passado na url.

Iniciaremos editando apenas o nome da receita. Sinta-se livre para editar quantos quiser.

Agora, no arquivo api.js, crie uma função, chamada updateRecipe. Nela, iremos receber dois parâmetros: o body normal e o id do produto

Essa função retornará todas as informações da receita, com o dado alterado.

<h3>DELETE /recipe/user/:id</h3>
O DELETE é mais simples e sua única função é deletar o dado. Uma vez deletado, o dado não existirá mais em nosso banco. O DELETE não recebe body, apenas o id da receita que queremos deletar.

Igualmente ao PATCH, precisamos primeiro identificar o id da receita, antes de deletar. Lembre-se de verificar se realmente quer apagar esse produto e, se o id é o correto!

No arquivo api.js, crie uma função, chamada destroyRecipe, que irá receber, por parâmetro, o id da receita

Caso dê certo, o DELETE não retorna nada, apenas o status 204 - NO CONTENT. Caso dê errado, ele retorna o erro.

<h4>Agora é com você!</h4>
Já praticamos vários métodos: PATCH, DELETE, POST e GET, usando token e sem token.

Para melhorar a experiência, que tal criar uma forma onde passará esses dados, de forma dinâmica, no HTML? Um formulário, por exemplo.

Você também pode criar mais receitas, editar, remover e ir verificando como está sendo essa manipulação de dados.
