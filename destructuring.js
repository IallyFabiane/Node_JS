
//Usando o spread operator e o conceito de arrays na feature destructuring de arrays e de objetos em JavaScript
const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];
const numeros1 = [numerosPares, numerosImpares];
const numeros2 = [...numerosPares, ...numerosImpares];
console.log(numeros1);//exibe um array multidimensional (array de arrays-nestecaso, um array bidimensional)
console.log(numeros2);//exibe um único array contendoo conteúdo dos dois arrays
const [num1, num2, ...num3] = [1, 2, 3, 4, 5];
console.log(num1, num2, num3); //agora num3 a partir do uso do spread operator conatena dentro de um array os valores restantes após num1 e num2
const [nome = 'Ially'] = [];
console.log(nome); //aqui será exibido o valor padrão definido no array pois essa const recebeu um array vazio; isso nos auxiliaria no caso de manutenção de consistência de dados, pois caso seja passado um valor vazio, temos um valor padrão para exibir.
const pessoa = {
    nome: 'Ially',
    idade: 27
}
const sobrenomePessoa = {...pessoa, sobrenome: 'Silva'}
console.log(sobrenomePessoa); // adicionando mais propriedades e valores dentro de um objeto JS que já existe e guardando esse novo objeto em uma nova variável
function imprimeDados ({ nome, idade }) {
    console.log(nome, idade) //acessando as propriedade dentro do objeto passado como parâmetro da função
}
imprimeDados(pessoa); //destructuring em parâmetros de uma função