const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
//                  (começa, termina, novo elemento)
//listaDeChamada.splice(1, 2, 'Rodrigo');
listaDeChamada.splice(2, 0, 'Rodrigo'); //0 como parâmetro evita de ser retirado algum elemento da lista
console.log(`Lista de chamada: ${listaDeChamada}`);