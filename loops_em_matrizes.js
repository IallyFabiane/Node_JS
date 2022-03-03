const notas1 = [10 , 6.5, 8 ,7.5]; // media 8
const notas2 = [9  , 6  , 6]; // media 7
const notas3 = [8.5, 9.5]; // media 9

const notasGerais = [notas1, notas2, notas3];

let media = 0;
// o 1º for recebe i que percorre cada array dentro da matriz e o 2º for percorre cada elemento de cada array da matriz
for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
      media += notasGerais[i][j]/notasGerais[i].length;
    }
  }
//      soma das médias dos arrays / tamanho da matriz
media = media/notasGerais.length;
console.log(media);