function triangulo(l1, l2, l3) {
    if (l1 == l2 == l3) {
        console.log("Triângulo equilátero");
    } else if (l1 == l2 && l1 !== l3 && l2 !== l3) {
        console.log("Triângulo isóceles");
    } else if (l1 !== l2 !== l3) {
        console.log("Triângulo escaleno");
    }
}

triangulo(1, 1, 1);