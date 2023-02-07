CSS | Entrega - Rede Social

Introdução
Nesta atividade exercitaremos os conceitos de CSS vistos até aqui, além dos conceitos de javascript vistos na sprint anterior. Trabalharemos mais incisivamente na parte responsiva, além de criar um modal para nossa aplicação.

O Figma com a parte visual da aplicação descreve bem visualmente cada comportamento, mas iremos destrinchar mais abaixo cada requisito a ser seguido na implementação dessa aplicação.

Acessar Figma

Desenvolvendo a Rede Social
Nossa aplicação será uma rede social, ao observar o Figma você notará que temos o layout disposto de forma bem parecida com a maioria das redes sociais, além das características visuais também teremos alguns comportamentos similares.

Estilização e comportamento visual
Criando Estilo do Menu de Navegação
Desktop e Mobile:

Desenvolva o menu de forma que o comportamento visual dele seja de acompanhar a tela do usuário quando o mesmo interagir com a página com scroll para baixo, ou seja, quando o usuário descer a página o nav vai ter que acompanhá-lo, se mantendo fixo no topo do documento.

Criando Estilo da área de sugestões de usuários
Desktop:

No canto direito da tela teremos um bloco "Sugestões para você seguir", traduzindo para o HTML, um aside, onde terá uma lista de usuários.

Mobile:

Deverá se conter abaixo do formulário de criação de post. E deverá alinhar seus elementos horizontalmente.

Funcionalidades
Post Funcionalidade
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

Inserindo um novo post
Formulário de inserir novo post funcionalidade
Esse formulário visa inserir um novo post ao objeto post de forma dinâmica a partir dos dados que o usuário inserir no input e no textarea

Vamos às funcionalidades:

Pegar valor do input e do textarea quando o botão do formulário com o texto "postar" for clicado;

Inserir esses novos dados no array de objetos posts;

Renderizar novo post em tela.

Conclusão
Esse exercício contém um Figma bem completo e organizado, utilize essa ferramenta para te ajudar a abstrair a organização do seu código de estilização. O layout que esse exercício traz vale muito a pena para colocar em um portfólio, então aproveite a oportunidade.

Lembre-se de revisitar as aulas de modal e position para esclarecer eventuais dúvidas!