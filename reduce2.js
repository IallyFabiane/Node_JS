const numeros = [43, 50, 65, 12];

const soma = numeros.reduce(function (acum, atual) {
    return atual + acum;
   }, 0);

console.log(soma); //170