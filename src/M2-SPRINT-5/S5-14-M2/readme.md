Consumindo API PokéAPI

Introdução
Nesta entrega utilizaremos a PokéAPI, se atente sempre a documentação oficial.

Fala devs!

Nessa atividade iremos aprender a como consumir uma API RESTful desenvolvendo um pequeno projeto que irá utilizar a API do Pokémon para listar Pokémon. Para isso, será necessário utilizarmos a função fetch do JavaScript. Vamos nessa?!

Design
Essa será a base para desenvolvermos a <a href="https://www.figma.com/file/Jc4DLi3BhrRTYN7IoBxG0T/Pok%C3%A9API?node-id=0%3A1&t=zcdoUH6RoPCikj4d-1">interface da aplicação</a>


Mão na massa
Nessa entrega, não entraremos em detalhe nas partes de HTML e CSS, o nosso foco será nas requisições. Primeiramente, vamos trabalhar no arquivo requests.js, criando a função consomePokeAPI, que utiliza o fetch em conjunto com async/await para conseguir os dados dos Pokémon

Entrega
Após ter feito o que foi proposto acima, vamos disponibilizar um desafio para você, onde você poderá demonstrar seus conhecimentos com:

Consumo de APIs
Requisições a partir de uma pesquisa
E claro, tornar a interface fiel ao protótipo do Figma utilizando CSS.
Vamos lá...

Qual aplicação vou desenvolver?
Agora com a listagem dos Pokémon pronta, a sua missão é fazer um campo de pesquisa funcional para podermos pesquisar pelo nome de cada Pokémon. Este é o resultado esperado:

https://i.imgur.com/aPxNci3.png

Desenvolvimento
Na parte do desenvolvimento iremos precisar de criar, além do layout, as funcionalidades que serão:

Puxar dados da API do Pokémon ao carregar a página
A lista precisa começar com o texto "Carregando...", mas ao receber os dados, deverá apagá-lo e listar os Pokémons conforme o Figma.
Possibilidade de pesquisar por Pokémon em específico
Não fazer apenas um filtro dos dados obtidos, mas sim uma nova requisição para cada pesquisa.