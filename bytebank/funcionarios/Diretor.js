import { Funcionario } from "./Funcionario.js"

export class  Diretor extends Funcionario {
    #bonificacao;
    
    get bonificacao() {
        return this.#bonificacao;
    }

    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this.#bonificacao = 2;
    }
}