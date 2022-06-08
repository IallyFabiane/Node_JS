//lendo os índices de um array

const frutas = ['uva', 'melancia', 'banana'];

for (let i in frutas) {
    console.log(frutas[i]);
}

//lendo as chaves de um objeto

const pessoa = {
    nome: 'Ially',
    sobrenome: 'Silva',
    idade: 28
}

for (let k in pessoa) {
    console.log(k, pessoa[k]);
}