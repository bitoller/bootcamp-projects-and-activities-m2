<h1>Projeto - Rede Social</h1>

<h3>Introdução</h3>
Nesta atividade exercitaremos os conceitos de CSS vistos até aqui, além dos conceitos de javascript vistos na sprint anterior. Trabalharemos mais incisivamente na parte responsiva, além de criar um modal para nossa aplicação.

O Figma com a parte visual da aplicação descreve bem visualmente cada comportamento, mas iremos destrinchar mais abaixo cada requisito a ser seguido na implementação dessa aplicação.

<a href="https://www.figma.com/file/6XlpI8Sv4eNgPSePyesKXK/CSS-Intermedi%C3%A1rio---Criando-Rede-Social?node-id=4%3A100">Acessar Figma</a>

<h3>Desenvolvendo a Rede Social>/h3>
Nossa aplicação será uma rede social, ao observar o Figma você notará que temos o layout disposto de forma bem parecida com a maioria das redes sociais, além das características visuais também teremos alguns comportamentos similares.

<h3>Estilização e comportamento visual</h3>
<h4>Criando Estilo do Menu de Navegação</h4>
Desktop e Mobile:

Desenvolva o menu de forma que o comportamento visual dele seja de acompanhar a tela do usuário quando o mesmo interagir com a página com scroll para baixo, ou seja, quando o usuário descer a página o nav vai ter que acompanhá-lo, se mantendo fixo no topo do documento.

<h4>Criando Estilo da área de sugestões de usuários</h4>
Desktop:

No canto direito da tela teremos um bloco "Sugestões para você seguir", traduzindo para o HTML, um aside, onde terá uma lista de usuários.

Mobile:

Deverá se conter abaixo do formulário de criação de post. E deverá alinhar seus elementos horizontalmente.

<h3>Funcionalidades</h3>
<h4>Post Funcionalidade</h4>
No projeto temos alguns posts já configurados em src\scripts\database.js

Vamos às funcionalidades do componente:

Renderizar os dados do array de objetos posts em tela;

Criar a função de abrir o modal com o post expandido com a descrição completa.

Lembrando que, você não deve criar um modal separado para cada post, mas criar um único componente de modal que recebe os dados dinamicamente por meio do click do botão com o texto "Abrir post"

Os dados dinâmicos serão:

imagem do usuário

nome do usuário

cargo do usuário

título do post

descrição do post

<h4>Inserindo um novo post</h4>
Formulário de inserir novo post funcionalidade  
Esse formulário visa inserir um novo post ao objeto post de forma dinâmica a partir dos dados que o usuário inserir no input e no textarea

Vamos às funcionalidades:

Pegar valor do input e do textarea quando o botão do formulário com o texto "postar" for clicado;

Inserir esses novos dados no array de objetos posts;

Renderizar novo post em tela.

<h3>Conclusão</h3>
Esse exercício contém um Figma bem completo e organizado, utilize essa ferramenta para te ajudar a abstrair a organização do seu código de estilização. O layout que esse exercício traz vale muito a pena para colocar em um portfólio, então aproveite a oportunidade.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
