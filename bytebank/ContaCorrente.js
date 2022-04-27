export class ContaCorrente { //construindo uma classe
    agencia;
    #saldo; //atributos seguido de # significa que são atributos privados(apenas a classe pode alterá-los)
    sacar(valor) {
        if(this.#saldo >= valor) { //condicionando o cliente que pode fazer uma operação de saque no banco
            this.#saldo -= valor;
            return valor;
        }
    }
    depositar(valor) { //condicionando a ação de depositar apenas se o saldo for positivo
        if(valor > 0) {
           return; //early return
        }
        this.#saldo+= valor;
    }
}
