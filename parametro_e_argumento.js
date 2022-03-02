function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(2 , 3));
console.log(soma(50 , 60));

// os parâmetros de uma função seguem uma ordem

function nomeIdade(nome, idade) {
    return ` Meu nome é ${nome} e minha idade é ${idade}.`
}
console.log(nomeIdade("Ially", 27));

function multiplica(num1, num2) {
    return num1 * num2;
}
console.log(multiplica(soma(2 , 3), soma(4 , 3)));

function comParametro(param) {
    console.log(param)
}
comParametro()