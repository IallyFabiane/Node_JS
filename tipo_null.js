// tipo null

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false