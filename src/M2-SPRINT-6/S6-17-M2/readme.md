<h1>PetInfo</h1>

<h3>Introdução</h3>
Nesta entrega iremos criar uma aplicação frontend que interage com uma API que irá ser rodada localmente. Iremos disponibilizar o repositório do projeto backend e informar quais os comandos necessários para rodar na sua máquina.

<h3>Qual aplicação vou desenvolver?</h3>
A aplicação que você irá desenvolver se chama Petinfo, um ambiente com informações em formato de blog sobre cuidados gerais com animais domésticos, como dicas, eventos e curiosidades.

Basicamente o usuário poderá acessar esses conteúdos ao se cadastrar na plataforma e fazer seu login, então iremos lidar com um contexto de autenticação.

<a href="https://www.figma.com/file/Rp8lLQJdu78RzPbL1Imjwl/Petinfo?node-id=0%3A1&t=FzI6FJFNrWWEn0FT-0">Acessar Figma</a>

A documentação da API só fica acessível assim que o servidor estiver rodando, ou seja, apenas após executar os comandos:
npm install ou yarn

npm run start ou yarn start

npm run build ou yarn buil

npm run dev ou yarn dev

Lembrando que os comandos, install, start, build, rodamos apenas a primeira vez que iremos utilizar a API.

Ao rodar todos estes comandos o seguinte usuário será criado

Porém nenhum post, será criado, logo ao fazer um get para buscar todos os posts, o retorno será um array vazio, até que o primeiro post seja criado.

<h3>Quais funcionalidades preciso desenvolver?</h3>

<h3>Login - Formulário</h3>

Caso o usuário não exista, informar que o usuário não foi encontrado em um tooltip (toast).

<h3>Cadastro - Formulário</h3>

A página de cadastro deve conter:
- Botão de retorno para o login
- inputs para o usuário informar: nome, email, link da foto de perfil e senha
- botão para enviar as informações

<h3>Home - Post</h3>

- Renderizar todos os posts contidos na API
- Exibir no máximo 145 caracteres no conteúdo post
- Converter data de publicação para o formato proposto no layout do Figma
- Adicionar botão de editar e remover caso o post seja do usuário logado
- Botão editar: chamar o modal editar, com o título em um input e o conteúdo textarea. Quando o usuário clicar no botão que contém o texto "Salva Alterações", enviar os dados dos inputs para API, via método patch.
- Botão excluir: chamar o modal de alerta, solicitando a confirmação da ação. Caso o usuário confirme, enviar o id do post que o usuário deseja excluir para a API, via método delete.

<h3>Home - Navbar</h3>

- Botão Criar publicação: Chamar modal com o formulário contendo os campos necessários para criar um post. Ao usuário finalizar o preenchimento, enviar os dados para API, via método post.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
