import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{ //herdando as propriedades e valores da classe Conta
    static numeroDeContas = 0;

    constructor (cliente, agencia){
        super(0, cliente, agencia); //referenciação do constructor da classe Conta
        ContaCorrente.numeroDeContas += 1;
    }

     get _sacar() {
       return this._sacar(valor, taxa);
    }

    sacar(valor){ //sobrescrevendo o método sacar
        let taxa = 1.1;
        return super._sacar(valor, taxa)
    }

}
