import { Funcionario } from "./Funcionario.js"
export class  Gerente extends Funcionario {
    #bonificacao;
    
    get bonificacao() {
        return this.#bonificacao;
    }
    
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this.#bonificacao = 1.1;
    }
}