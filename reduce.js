const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPhyton = [7, 3.5, 8, 9.5];

function mediaSala (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)
    return somaDasNotas / notasDaSala.length;
}
console.log(`A média da sala de JavaScript: ${mediaSala(salaJS)}`);
console.log(`A média da sala de Java: ${mediaSala(salaJava)}`);
console.log(`A média da sala de Phyton: ${mediaSala(salaPhyton)}`);

const notas = [10, 6.5, 8, 7];
const media = notas.reduce((a, b) => a + b, 0) / notas.length;
console.log(media);