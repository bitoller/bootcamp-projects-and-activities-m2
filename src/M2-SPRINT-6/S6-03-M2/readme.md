<h1>Atualizando um Array com Spread Operator e Destructuring</h1>

<h3>Introdução</h3>
Nessa atividade praticaremos conceitos avançados de desestruturação e spread operator com array. Utilizaremos essas duas ferramentas incríveis para manipular os dados de um array de objetos, então, bora lá!

<h3>Ambientação</h3>
Ao fazer um clone do código-fonte da aula você perceberá que teremos duas variáveis do tipo const, ambas contém um array que está dentro de uma instância de Object.freeze(), mas calma, é um array como qualquer outro. Como ele foi criado através do método freeze() nativo do JavaScript, ele virou um array literalmente congelado, ou seja, métodos que alteram os dados dentro dele não funcionam, como: push(), pop(), shift(), etc., porém, métodos de iteração de array como map(), forEach(), filter(), etc., funcionam normalmente. Essa é apenas uma maneira de incentivar o uso do spread operator e a desestruturação.

<h3>Resolvendo problemas</h3>
Nossa aplicação criará resultados esperados da manipulação de dados de usuários, lidaremos com dados sensíveis como senhas e, além disso, vamos moldar os dados conforme a necessidade de cada função, lembre-se dos conceitos do operador spread e de desestruturação, re-visite as aulas se necessário.

<h3>Adicionando endereços aos usuários</h3>

Nossas duas bases de dados estão separadas, a const usuarios e const enderecos, porém, não necessariamente queremos esses dados separados, o primeiro problema que teremos que resolver é atribuir o endereço correto a cada usuário.

Desenvolva sua lógica na função addAddresToUser

Perceba que cada usuário tem uma propriedade id, e cada endereço tem uma propriedade chamada userId, que nada é que o id do usuário a qual esse endereço pertence

<h3>Escondendo as senhas</h3>

Muito bem, agora que temos uma função que atribui o endereço correto a cada usuário, precisamos desenvolver uma função que retire a propriedade password dos usuários, afinal, é um dado sensível e não queremos ele sendo listado.

Desenvolva sua lógica na função deletePassword

Essa função receberá um usuário por vez e removerá a propriedade password desse usuário, há várias maneiras de fazer essa lógica, mas uma maneira bastante eficiente é desestruturar nos parâmetros de entrada da função.

Logo em seguida listaremos os usuários sem a senha, para isso desenvolva sua lógica na função listUsers, e não se esqueça de usar a função deletePassword para cada usuário e retornar todos os usuários com seus endereços corretos, porém, sem a senha!

<h3>Filtrando dados necessários</h3>

O próximo passo da nossa aplicação será listar apenas o nome, e-mail e as stacks de cada usuário, usar a desestruturação é essencial para criar a lógica de resolução deste problema. Crie sua lógica na função listUserStacks

<h3>Nada de Python</h3>

A última função da nossa aplicação será responsável por listar todos os usuários, exceto os que tem “Python” na propriedade stack, esse usuário não será mostrado. Além disso, a listagem dos usuários deve conter o endereço e não podem ter suas senhas expostas. Desenvolva sua lógica dentro da função deleteUser

<h3>Conclusão</h3>
Essa atividade promoveu desafios na manipulação de dados dentro de arrays, entretanto, métodos como push(), pop(), shift() foram travados através do método Object.freeze(). Para desafiar e incentivar o uso de conceitos amplamente utilizado nos códigos de mercado, os quais são a desestruturação e spread operator, não se esqueça de pratica-los e utilizá-los em todas as atividades daqui para frente!
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
