Atividade Utilizando Get, Post, Patch e Delete
Tópicos do conteúdo
Introdução
Chegou a hora de aplicarmos nossos conhecimentos adquiridos nas últimas aulas.

Nessa atividade, iremos rodar uma API localmente em nossa máquina e utilizaremos os métodos GET, POST, PATCH e DELETE para realizarmos algumas requisições. Bora lá?

Mão na massa! 
Primeiro, vamos clonar o repositório da API para a nossa máquina.

Feito isso, abriremos o terminal na pasta em que clonamos e rodaremos o comando npm install para instalarmos todas as dependências necessárias para rodar o projeto.

Lembre-se: com as dependências instaladas, precisamos executar os comandos npm run start, npm run build e npm run dev, nesta exata ordem.

Agora que temos o nosso ambiente pronto, vamos colocar a mão na massa!

Seu objetivo será criar um site contendo uma lista com diversos produtos que irão vir da API. No seu projeto, será possível adicionar, editar ou excluir os produtos. Utilize o DOM para renderizar os itens em tela e criar uma aplicação funcional. Use a sua criatividade!

Dica: Teste os endpoints no Insomnia antes de ir para o código. Fique atento ao HEADER e BODY das suas requisições.

1. Capturando todos os produtos da API
Utilize o endpoint /products para capturar todos os produtos cadastrados no sistema com o método GET.

2. Adicionando novos produtos
Utilize o endpoint /products para adicionar um novo filme ao sistema com o método POST.

3. Editando informações dos produtos
Utilize o endpoint /products/id para editar alguma informação referente ao filme selecionado com o método PATCH.

3. Deletando os produtos da lista
Utilize o endpoint /products/id para deletar um filme da lista com o método DELETE.

Para te auxiliar melhor, vamos disponibilizar a documentação da API:

Acessar documentação

Conclusão
Essa atividade promoveu a prática dos métodos de requisição em uma API. Criamos uma aplicação funcional e útil, utilizando o DOM para deixar tudo dinâmico. No seu dia-a-dia como pessoa desenvolvedora isso será muito comum, então é importantíssimo ter esse conhecimento!