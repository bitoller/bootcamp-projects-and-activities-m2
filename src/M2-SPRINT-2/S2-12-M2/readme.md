<h1>JavaScript | Entrega - Reproduzindo Métodos de Array</h1>

<h3>O que devo fazer nessa Entrega?</h3>
Sua tarefa é desenvolver uma aplicação em JavaScript que reproduza as funcionalidades dos métodos map(), filter(), find() e reduce(). A aplicação deve conseguir de processar arrays de dados, fornecer suporte a diferentes tipos de dados e retornar resultados específicos conforme as regras de filtragem e agregação definidas pela documentação do método.

Mão na massa!
Reproduza essas quatro funcionalidades e se atente as lógicas delas:

<h3>A funcionalidade do método map() deve permitir que o usuário transforme cada elemento do array de entrada em um novo elemento, conforme a lógica definida.</h3>

<h3>A funcionalidade do método filter() deve permitir que o usuário filtre elementos do array de entrada com base em condições específicas.</h3>

<h3>A funcionalidade do método find() deve permitir que o usuário encontre o primeiro elemento que atenda a uma determinada condição.</h3>

<h3>A funcionalidade do método reduce() deve permitir que o usuário agregue os elementos do array de entrada em um único valor, conforme a lógica definida.</h3>

A aplicação deve ser desenvolvida seguindo boas práticas de programação e ser testada rigorosamente antes da entrega.

Certifique-se de ler a documentação e entender como funciona o algoritmo. Se atente a alguns pontos:

1. O método recebe algo como parâmetro? Se sim, o quê?

2. O método recebe alguma callback? Quais parâmetros essa callback pede?

3. Verifique o funcionamento do respectivo método?

4. O que o método deve retornar?

<h4>Exemplo</h4>
Essa entrega tem como foco compreender a lógica por trás de cada método. Cada função terá um array de teste para você iterar e uma função pronta para você verificar se está conseguindo reproduzir o comportamento. Deixaremos o método forEach como um exemplo de como reproduzir a entrega.

Array.forEach( )
Primeiro passo, iremos acessar a documentação do forEach() para entendermos como ele se comporta.

A função forEach recebe dois argumentos: um array e uma função de callback. O array é o conjunto de elementos a serem iterados, enquanto a função de callback é uma função que será invocada para cada elemento do array.

Logo, temos que considerar que, o propósito do forEach é iterar por todos os elementos e retornar uma callback.

Nessa iteração usaremos um loop for. O loop começa no índice 0 e continua até que todos os elementos do array tenham sido processados. Em cada iteração, conforme a sintaxe descrita na documentação, a função de callback é invocada com três argumentos: o valor do elemento atual, o índice do elemento atual e o array completo.

O valor do elemento atual é o valor armazenado no array na posição atual (array[i]). O índice do elemento atual é o índice da posição atual no array (index). O array completo é o array que está sendo iterado (array). Esses três argumentos são passados automaticamente para a função de callback pelo método forEach.

Lembrando que essa callback é um exemplo, o seu método deve ser viável para qualquer callback que siga os padrões do método mencionados na documentação

Após o loop for ter sido completado, o método forEach retorna undefined. A finalidade deste método é iterar sobre todos os elementos do array e invocar a função de callback para cada um deles, e segundo a documentação, não retornar um resultado específico.

Finalmente, chamamos a função forEach passando o array numbers e a função de callback minhaCallBackForEach como argumentos. Isso faz com que a função forEach itere sobre todos os elementos do array e invoque a função de callback minhaCallBackForEach para cada elemento.
<br>
<br>

<p align="center"><b>Taken from Kenzie Academy Brasil</b></p>
