export class Conta { //classe abstrata: não pode ser instanciada, funciona apenas para ser herdada!
    #saldo;
    #cliente;
    #agencia;

    constructor(saldoInicial, cliente, agencia){

        if(this.constructor == Conta) {
            throw new Error('Você não deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata'); //lançando um erro caso o dev tente instanciar a classe Conta
        }

        this.#saldo = saldoInicial;
        this.#cliente = cliente;
        this.#agencia = agencia;

    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }

    get agencia() {
        return this.#agencia;
    }

    sacar(valor){ //método abstrato, feito para não ser chamado diretamente
        throw new Error('O método sacar da conta é abstrato')
    }

    _sacar(valor, taxa) { //método sacar protegido da classe Conta
        const valorSacado = taxa * valor;
        if(this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
       }

       return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this.#saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}