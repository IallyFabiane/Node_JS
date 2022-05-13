function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin); //Math.random é multiplicado pelo intervalo númerico exemplificado
}

console.log(randomRange(5, 10));