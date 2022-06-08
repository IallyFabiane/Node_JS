/*const data = new Date();
let diaSemanaTexto;
let diaMesTexto;

function diaDaSemana(diaSemana) {
    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-feira';
        case 2:
            return diaSemanaTexto = 'Terça-feira';
        case 3:
            return diaSemanaTexto = 'Quarta-feira';
        case 4:
            return diaSemanaTexto = 'Quinta-feira';
        case 5:
            return diaSemanaTexto = 'Sexta-feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
        diaDaSemana = '';
    }
}

function nomeMes(numeroMes) {
    switch (numeroMes) {
        case 0:
            return diaMesTexto = 'janeiro';
        case 1:
            return diaMesTexto = 'fevereiro';
        case 2:
            return diaMesTexto = 'março';
        case 3:
            return diaMesTexto = 'abril';
        case 4:
            return diaMesTexto = 'maio';
        case 5:
            return diaMesTexto = 'junho';
        case 6:
            return diaMesTexto = 'julho';
        case 7:
            return diaMesTexto ='agosto';
        case 8:
            return diaMesTexto = 'setembro';
        case 9:
            return diaMesTexto = 'outubro';
        case 10:
            return diaMesTexto = 'novembro';
        case 11:
            return diaMesTexto ='dezembro';
    }
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = diaDaSemana(diaSemana);
    const nomeDoMes = nomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeDoMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
}

let resultado = document.querySelector('.data-conteudo'); //capturando a tag p da section
resultado.innerHTML = criaData(data); //escrevendo dentro do HTML dinamicamente através da chamada da função dataDinamica*/

let resultado = document.querySelector('.data-conteudo');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
resultado.innerHTML = data.toLocaleString('pt-BR', opcoes);