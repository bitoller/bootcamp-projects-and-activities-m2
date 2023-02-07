<h1>JavaScript | Atividade - Removendo Dados</h1>

<h3>Introdução</h3>
Fala, dev!

Nesta atividade iremos exercitar o método findIndex e splice criando uma função que encontra o índice do produto, e o remove do array. Para iniciarmos, preciso que clone esse repositório.

<h3>Ambientação</h3>
No projeto clonado, você encontrará a seguinte estrutura de pastas e arquivos:

index.html
styles.css
scripts
database.js <-- lista de produtos
script.js <-- Arquivo para desenvolver sua lógica
strict // Não é necessário acessar esta pasta para desenvolver a atividade

Para a atividade de hoje, só será necessário utilizar o arquivo script.js para desenvolver sua lógica, e o database.js para verificar a lista de produtos.

<h4>Arquivo script.js</h4>
Neste arquivo irá conter a função removeDoCarrinho, que recebe como parâmetro produto. Não será necessário chamar essa função, pois ela já está sendo chamada em outro arquivo e sendo passado o parâmetro, porém, para o seu funcionamento, é obrigatório retornar o produto removido (resultado do método splice) no return da função.

O parâmetro produto, irá conter um objeto que é o produto que deve ser removido. Você deve utilizá-lo para criar a lógica de removê-lo do array.

<h4>Arquivo database.js</h4>
Aqui você encontrará o array listaDoCarrinho, que contem os itens que estão no carrinho. É possível utilizá-lo no arquivo script.js normalmente

<h3>Testando a função</h3>
Para testar a função, é necessário Clicar no botão “X” e checar se há algum erro no console.<br>
<br>
<img src="./assets/example-1.png" alt="example 1" />

<h3>Desafio</h3>
Crie uma lógica na função removeDoCarrinho, que encontra o índice do produto no array listaDoCarrinho, e o remove. Para esse desafio será necessário utilizar o método findIndex e splice.

<h4>Resultado esperado do desafio</h4>
Caso o botão de remover do produto seja clicado, o item deve ser removido do array listaDoCarrinho e da tela, como mostra o exemplo abaixo:<br>
<br>
<img src="./assets/example-2.gif" alt="example 2" />

Lembre-se, para que os elementos sejam removidos da tela, sua função deve retornar o produto que foi removido, no caso, o resultado do método splice.

<h3>Conclusão</h3>
Nessa atividade criamos a lógica de remover produtos de um array. Esse conhecimento será muito utilizado ao trabalharmos com carrinho ou listas que possibilitam a remoção de itens, como uma lista de a fazer (To-do)! Até a próxima!
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
