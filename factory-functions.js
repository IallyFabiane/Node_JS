function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return`${this.nome} está ${assunto}`;
        },
        peso,
        altura,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Ially', 'Fabiane', 59.8, 1.55);
console.log(p1.fala('falando sobre JavaScript'));
console.log(p1.imc());