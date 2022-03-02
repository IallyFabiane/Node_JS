//declaração de função
console.log(soma(1 , 3));

function soma(num1, num2) {
    return num1 + num2;
}

//expressão de função 
const somar = function (num1, num2) { return num1 + num2; }
console.log(soma(1, 2));

//arrow function     //parâmetro
const apresentarArrow = nome =>  `Meu nome é ${nome}`;

const multiplica = (num1, num2) => num1 * num2;

//arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
       return num1 + num2;
    }
}