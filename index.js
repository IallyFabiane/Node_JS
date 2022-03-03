const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat("André", "Fernanda");

console.log(arrayConcat);
console.log(arrayOriginal);

const arrayOriginal2 = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat2 = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat2);
console.log(arrayOriginal2); 

const arrayOriginal3 = [50, 60, 70];
const arrayConcat3 = arrayOriginal.concat([80, [90, 100]]);

console.log(arrayConcat3);
console.log(arrayOriginal3);