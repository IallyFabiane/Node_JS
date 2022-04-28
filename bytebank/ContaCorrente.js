import { Cliente } from "./Cliente.js"

export class ContaCorrente { //construindo uma classe
    agencia;
    #cliente;

    set cliente(novoValor) { //atribuindo valores ao cliente com a palavra-reservada set
        if(novoValor instanceof Cliente) { //condicionando a atribuição do valor apenas se cliente for uma instância da classe Cliente
            this.#cliente = novoValor;
        }
    }

    #saldo; //atributos seguido de # significa que são atributos privados(apenas a classe pode alterá-los)
    sacar(valor) {
        if(this.#saldo >= valor) { //condicionando o cliente que pode fazer uma operação de saque no banco
            this.#saldo -= valor;
            return valor;
        }
    }
    depositar(valor) { //condicionando a ação de depositar apenas se o saldo for positivo
        if(valor <= 0) {
           return; //early return
        }
        this.#saldo += valor;
    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
