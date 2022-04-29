import { Cliente } from "./Cliente.js"

export class ContaCorrente { //construindo uma classe
    static numeroDeContas = 0; //variável contadora para registrar quantas contas correntes foram criadas. Recebe +1 sempre que uma nova instância da classe ContaCorrente for inicializada a partir do constructor.
    agencia;
    #cliente;

    set cliente(novoValor) { //atribuindo valores ao cliente com a palavra-reservada set
        if(novoValor instanceof Cliente) { //condicionando a atribuição do valor apenas se cliente for uma instância da classe Cliente
            this.#cliente = novoValor;
        }
    }
    
    get cliente(){ //pegando o valor do atributo privado cliente através do acessor get
        return this.#cliente;
    }
    
    get saldo(){ //acessando o valor do atributo privado saldo utilizando o acessor get
        return this.#saldo;
    }
    
    #saldo; //atributos seguido de # significa que são atributos privados(apenas a classe pode alterá-los)
   
    construtor(agencia, cliente) { // no constructor podemos utilizar os acesores que temos dentro da classe
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //CHAMANDO O ATRIBUTO STATIC para se referir a classe como um todo e não apenas a instância criada
    }
    
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
