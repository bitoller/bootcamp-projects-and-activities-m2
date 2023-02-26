PetInfo

Lembre-se de que essa entrega é individual e qualquer suspeita de plágio ou interferência na entrega de outro aluno pode ser questionada pela equipe de ensino.

Introdução
Nesta entrega iremos criar uma aplicação frontend que interage com uma API que irá ser rodada localmente. Iremos disponibilizar o repositório do projeto backend e informar quais os comandos necessários para rodar na sua máquina.

Qual aplicação vou desenvolver?
A aplicação que você irá desenvolver se chama Petinfo, um ambiente com informações em formato de blog sobre cuidados gerais com animais domésticos, como dicas, eventos e curiosidades.

Basicamente o usuário poderá acessar esses conteúdos ao se cadastrar na plataforma e fazer seu login, então iremos lidar com um contexto de autenticação.

Repositório Base

Acessar repositório base

Layout da aplicação no Figma

Acessar layout da aplicação

Repositório da API Local

Acessar repositório da API

Documentação da API

Acessar documentação

A documentação da API só fica acessível assim que o servidor estiver rodando, ou seja, apenas após executar os comandos:
npm install ou yarn

npm run start ou yarn start

npm run build ou yarn buil

npm run dev ou yarn dev

Lembrando que os comandos, install, start, build, rodamos apenas a primeira vez que iremos utilizar a API.

Ao rodar todos estes comandos o seguinte usuário será criado:

{
    username:"kenzinho",
    email: "kenzinho@mail.com",
    password:"123456" ,
    avatar: "https://imgs.search.brave.com/dmNsyBvLmS4jetkOvFsxVmpaniEqqxT8BaNBAI-_7jM/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2ljb24tb2YtYS1i/dXNpbmVzc21hbi1h/dmF0YXItb3ItcHJv/ZmlsZS1waWMtcGlj/dHVyZS1pZDQ3NDAw/MTg5Mj9rPTYmbT00/NzQwMDE4OTImcz0x/NzA2NjdhJnc9MCZo/PWF0cVpzV0YtVWNM/QkQ1dTJCTVpqcE11/cjZKOW56aVFyclBh/aXFaaDU3S1k9"
}

Porém nenhum post, será criado, logo ao fazer um get para buscar todos os posts, o retorno será um array vazio, até que o primeiro post seja criado.

Quais funcionalidades preciso desenvolver?
Login - Formulário

Caso o usuário não exista, informar que o usuário não foi encontrado em um tooltip (toast).
Cadastro - Formulário

A página de cadastro deve conter:
Botão de retorno para o login
inputs para o usuário informar: nome, email, link da foto de perfil e senha
botão para enviar as informações
Home - Post

Renderizar todos os posts contidos na API
Exibir no máximo 145 caracteres no conteúdo post
Converter data de publicação para o formato proposto no layout do Figma
Adicionar botão de editar e remover caso o post seja do usuário logado
Botão editar: chamar o modal editar, com o título em um input e o conteúdo textarea. Quando o usuário clicar no botão que contém o texto "Salva Alterações", enviar os dados dos inputs para API, via método patch.
Botão excluir: chamar o modal de alerta, solicitando a confirmação da ação. Caso o usuário confirme, enviar o id do post que o usuário deseja excluir para a API, via método delete.
Home - Navbar

Botão Criar publicação: Chamar modal com o formulário contendo os campos necessários para criar um post. Ao usuário finalizar o preenchimento, enviar os dados para API, via método post.