Kenzie Empresas

Nesta atividade, vamos criar uma aplicação que visa auxiliar donos de empresas e seus respectivos colaboradores encontrar as informações necessárias, conforme seu nível de acesso.

Sua tarefa é criar uma interface web para consumir a API e exibir essas informações em tela. Se atente em apresentar telas bonitas, porém, preferimos o processo funcional e fluido. Utilize todos os conhecimentos e boas práticas adquiridos no M2.

Objetivo
O Principal objetivo é simular uma empresa com dois tipos de usuários, um sendo o usuário comum, sendo um funcionário, na qual tem poucas funcionalidades e outra sendo a maquina admin, que gerencia toda a aplicação.

Nosso principal desafio será entender quem é cada usuário e o que ele pode fazer na nossa aplicação.

Você consumirá a API já existente no repositório abaixo. Em seguida há uma documentação simplificada dela.

Sobre a aplicação
Documentação/Repositórios

<a href="https://www.figma.com/file/EEEdGd0gL5iLzaspW8DPXE/Kenzie-Empresas-Oficial">Acessar layout do projeto no Figma</a>

Sua aplicação web DEVE CONTER
Pelo menos 4 páginas principais:

Página de Inicial:
Local onde poderemos visualizar todas as empresas que existem na nossa aplicação e filtrar por setores, além de redirecionar para a página de login e cadastro.

Página de Cadastro:
Página para criação de usuários novos, não sendo possível criar admins.

Página de Autenticação:
Página de login onde será feito a validação do user ao logar, direcionando o mesmo para sua respectiva tela.

Página Painel de Controle:
O Painel de controle, será baseado no tipo de usuário, diferindo caso o usuário entre na aplicação ou o admin

A seguir será detalhado o que deverá conter em cada página.

Desenvolvendo a aplicação
Página Inicial - Home Page
Ter um redirecionamento para as páginas de cadastro e login
Exibir uma lista de todas as empresas cadastradas na API;
Permitir filtrar a listagem de empresas por setor;
Sem restrições, qualquer um pode entrar nessa página e acessar os dados
Página de Cadastro - Register Page
Ter uma tela (via um formulário) de cadastro de usuário com os seguintes campos:

username
2. email
3. password
4. professional_level - Opcional
Ter um botão para redirecionar para página de login;

Restrições:
Caso o cadastro seja bem-sucedido, deverá redirecionar o usuário para a tela de login, caso contrário, ou seja, a requisição seja inválida, deverá retornar um feedback para o usuário (uma mensagem de erro).
Não é necessário criar um usuário admin!! Estará setado no banco apenas um único admin. Esse usuário será considerado o dono de todas as empresas da aplicação, para acessar utilize esses dados:
{
   email: "admin@mail.com",
   password: "admin"
}

Página de Autenticação - Login Page
Ter uma tela (via um formulário) de login de usuário com os seguintes campos:

E-mail
2. Senha
Persistir os dados no localStorage;

Ter um botão para redirecionar para página de cadastro

Restrições:
Caso o cadastro seja bem-sucedido:
1. Armazenar a resposta da requisição no localStorage.
2. Deverá redirecionar o usuário para a tela de dashboard respectiva.
3. Utilizem a requisição de autenticação para validar qual o tipo de usuário

Caso contrário, ou seja, a requisição seja inválida, deverá retornar um feedback para o usuário (uma mensagem de erro).

Página Painel de Controle - Dashboard Page
Após a autenticação, você deverá verificar se o usuário é um usuário comum ou administrador. Pois conterá informações diferentes para cada tipo de acesso ou usuário:

Painel de Controle do Administrador deverá conter:

Seção de Departamentos:
Ter um formulário de cadastro de departamento para uma empresa específica;
Listar todos os departamentos de uma empresa específica;
Ao Clicar em um departamento, visualizar dados específicos dela, como funcionários, descrição, nome e a que empresa pertence;
Listar todos os funcionários de um departamento com nome, nível profissional, tipo de trabalho;
Contratar e demitir um funcionário de um departamento;
Seção de Usuários:
Modificar a modalidade de trabalho (home office, presencial e híbrido) e o cargo (estágio, júnior, pleno, sênior) de um funcionário;
Listar todos os usuários cadastrados na aplicação
Painel de Controle do Usuário comum deverá conter:
Visualiza apenas sua empresa;
Visualiza apenas o seu departamento;
Listar todos os funcionários do departamento a qual pertence com o nome e o nível profissional;
Editar suas próprias informações (password, email e username).
Caso ele não pertença a nenhum departamento, adicionar mensagem na tela uma mensagem como: “Você ainda não foi contratado” ou uma imagem que tenha o mesmo significado.
O mais importante é ter todas as funcionalidades de forma efetiva!