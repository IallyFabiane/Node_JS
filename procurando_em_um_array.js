const listaDeAlunos = ['João', 'Juliana','Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];
let listaDeNotasEAlunos =[listaDeAlunos, mediasDosAlunos]; // lista de duas dimensões

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + " sua média é " + listaDeNotasEAlunos[1][indice];
    } else {
        return "O aluno não está cadastrado."
    }
}

console.log(exibeNomeNota('Ana'));