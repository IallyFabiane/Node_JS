let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [b, c, a] // atribuição através de desestruturação

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, ...resto]  = numeros; //utilizando o rest operator
console.log(resto);

const [um, ,dois, ,tres] = numeros; //selecionando valores alternados do array para serem exibidos
console.log(um, dois, tres);

const listas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //acessando os índices de um array multidimensional através da desestruturação
const [lista1, lista2, lista3] = listas;
console.log(lista3);