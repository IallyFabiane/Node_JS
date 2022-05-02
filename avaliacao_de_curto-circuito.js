let corPadrao = null;
let corUsuario = 'preto';

console.log(corPadrao || corUsuario); // primeiro valor false, retorna o primeiro valor verdadeiro. 
console.log(corPadrao && corUsuario); //primeiro valor false, retorna o primeiro valor falso. Não preciso avaliar corUsuario, pois o primeiro valor já foi false.