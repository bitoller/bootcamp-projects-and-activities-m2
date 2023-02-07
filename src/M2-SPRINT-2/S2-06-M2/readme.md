JavaScript | Atividade - Pesquisando por dados

Introdução
Fala dev!

Nesta atividade iremos exercitar o método filter e includes criando uma função que pesquisa pelo nome de um produto em uma lista, e retorna o resulta para o usuário. Para iniciarmos, preciso que clone esse repositório.

Ambientação
No projeto clonado, você encontrará a seguinte estrutura de pastas e arquivos:

index.html
styles.css
scripts
database.js
lista de produtos
render.js
script.js
Arquivo para desenvolver sua lógica

Para a atividade de hoje, só será necessário utilizar o arquivo script.js para desenvolver sua lógica, e o database.js para verificar a lista de produtos.

Arquivo script.js
No arquivo irá conter a função procuraSobremesa que recebe como parâmetro valorDoInput. Não será necessário chamar essa função, pois ela já está sendo chamada em outro arquivo e sendo passado o parâmetro, porém, para o seu funcionamento, é obrigatório retornar uma lista de produtos no return da função.

<!-- // script.js

function procuraSobremesa(valorDoInput) {
	/* Desenvolva sua lógica a partir aqui */
    
	return /* Lembre-se de retornar uma lista de produtos */
} -->

O parâmetro valorDoInput, como o nome diz, irá conter o valor do input, e você deve utilizá-lo para criar a lógica da pesquisa.

Arquivo database.js
Aqui você irá encontrar o array listaDeSobremesas, que contem todos os produtos que estão sendo mostrados em tela. É possível utilizá-lo no arquivo script.js normalmente, como mostra o exemplo abaixo:

<!-- // database.js

function procuraSobremesa(valorDoInput) {
	console.log(listaDeSobremesas) // irá exibir todas as sobremesas no console
} -->

Testando a função
Para testar a função, é necessário inserir um texto no input e clicar no botão “Pesquisar”:

<img src="./assets/example-1.png" alt="example 1" />

Desafio 
Crie uma lógica na função procuraSobremesa, que retorna apenas uma lista com produtos que contenham o nome que o usuário inseriu no campo de pesquisa. Para esse desafio será necessário utilizar o método filter e includes.

Resultado esperado
Caso o usuário insira “limão” no campo de pesquisa, deve ser mostrado apenas os itens que contenham limão no nome, como “Torta de limão” e “Mousse de limão”. Por exemplo:

<img src="./assets/example-2.gif" alt="example 2" />

Extra 
Agora com a lógica já desenvolvida, podemos perceber que ao pesquisar “chocolate”, com a letra inicial minúscula, não é mostrado os itens “Chocolate branco” e “Chocolate”, como o esperado.

<img src="./assets/example-3.gif" alt="example 3" />

O seu trabalho é utilizar o método de string toLowerCase para possibilitar a busca de produtos sem a necessidade de as letras maiúsculas ou minúsculas corresponderem ao nome do produto pesquisado.

Resultado esperado

<img src="./assets/example-4.gif" alt="example 4" />

Conclusão
Nessa atividade criamos a lógica de um campo de pesquisa utilizando métodos de array. Esse conhecimento será muito utilizado na nossa vida de desenvolvedor, então lembre sempre de rever e fixar bem os conceitos utilizados nessa atividade!