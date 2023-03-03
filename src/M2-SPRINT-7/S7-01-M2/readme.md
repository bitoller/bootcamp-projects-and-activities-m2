<h1>Kenzie Empresas</h1>

Nesta atividade, vamos criar uma aplicação que visa auxiliar donos de empresas e seus respectivos colaboradores encontrar as informações necessárias, conforme seu nível de acesso.

Sua tarefa é criar uma interface web para consumir a API e exibir essas informações em tela. Se atente em apresentar telas bonitas, porém, preferimos o processo funcional e fluido. Utilize todos os conhecimentos e boas práticas adquiridos no M2.

<h3>Objetivo</h3>
O Principal objetivo é simular uma empresa com dois tipos de usuários, um sendo o usuário comum, sendo um funcionário, na qual tem poucas funcionalidades e outra sendo a maquina admin, que gerencia toda a aplicação.

Nosso principal desafio será entender quem é cada usuário e o que ele pode fazer na nossa aplicação.

Você consumirá a API já existente no repositório abaixo. Em seguida há uma documentação simplificada dela.

<h3>Sobre a aplicação</h3>

<a href="https://www.figma.com/file/EEEdGd0gL5iLzaspW8DPXE/Kenzie-Empresas-Oficial">Acessar layout do projeto no Figma</a>

<h4>Sua aplicação web DEVE CONTER</h4>
Pelo menos 4 páginas principais:

<h3>Página de Inicial:</h3>
Local onde poderemos visualizar todas as empresas que existem na nossa aplicação e filtrar por setores, além de redirecionar para a página de login e cadastro.

<h3>Página de Cadastro:</h3>
Página para criação de usuários novos, não sendo possível criar admins.

<h3>Página de Autenticação:</h3>
Página de login onde será feito a validação do user ao logar, direcionando o mesmo para sua respectiva tela.

<h3>Página Painel de Controle:</h3>
O Painel de controle, será baseado no tipo de usuário, diferindo caso o usuário entre na aplicação ou o admin

A seguir será detalhado o que deverá conter em cada página.

<h3>Desenvolvendo a aplicação</h3>

<h3>Página Inicial - Home Page</h3>

- Ter um redirecionamento para as páginas de cadastro e login
- Exibir uma lista de todas as empresas cadastradas na API;
- Permitir filtrar a listagem de empresas por setor;
- Sem restrições, qualquer um pode entrar nessa página e acessar os dados

<h3>Página de Cadastro - Register Page</h3>

Ter uma tela (via um formulário) de cadastro de usuário com os seguintes campos:
- username
- email
- password
- professional_level - Opcional
- Ter um botão para redirecionar para página de login;

<h4>Restrições:</h4>
Caso o cadastro seja bem-sucedido, deverá redirecionar o usuário para a tela de login, caso contrário, ou seja, a requisição seja inválida, deverá retornar um feedback para o usuário (uma mensagem de erro).

Não é necessário criar um usuário admin!! Estará setado no banco apenas um único admin. Esse usuário será considerado o dono de todas as empresas da aplicação

<h3>Página de Autenticação - Login Page</h3>

Ter uma tela (via um formulário) de login de usuário com os seguintes campos:
- E-mail
- Senha
- Persistir os dados no localStorage;
- Ter um botão para redirecionar para página de cadastro

<h4>Restrições:</h4>

Caso o cadastro seja bem-sucedido:
- Armazenar a resposta da requisição no localStorage.
- Deverá redirecionar o usuário para a tela de dashboard respectiva.
- Utilizem a requisição de autenticação para validar qual o tipo de usuário

Caso contrário, ou seja, a requisição seja inválida, deverá retornar um feedback para o usuário (uma mensagem de erro).

<h3>Página Painel de Controle - Dashboard Page</h3>
Após a autenticação, você deverá verificar se o usuário é um usuário comum ou administrador. Pois conterá informações diferentes para cada tipo de acesso ou usuário:

<h4>Painel de Controle do Administrador deverá conter:</h4>

Seção de Departamentos:
- Ter um formulário de cadastro de departamento para uma empresa específica;
- Listar todos os departamentos de uma empresa específica;
- Ao Clicar em um departamento, visualizar dados específicos dela, como funcionários, descrição, nome e a que empresa pertence;
- Listar todos os funcionários de um departamento com nome, nível profissional, tipo de trabalho;
- Contratar e demitir um funcionário de um departamento;

Seção de Usuários:
- Modificar a modalidade de trabalho (home office, presencial e híbrido) e o cargo (estágio, júnior, pleno, sênior) de um funcionário;
- Listar todos os usuários cadastrados na aplicação
- Painel de Controle do Usuário comum deverá conter:
- Visualiza apenas sua empresa;
- Visualiza apenas o seu departamento;
- Listar todos os funcionários do departamento a qual pertence com o nome e o nível profissional;
- Editar suas próprias informações (password, email e username).
- Caso ele não pertença a nenhum departamento, adicionar mensagem na tela uma mensagem como: “Você ainda não foi contratado” ou uma imagem que tenha o mesmo significado.

O mais importante é ter todas as funcionalidades de forma efetiva!
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
