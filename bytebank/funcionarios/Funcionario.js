export class Funcionario {
    #nome;
    #salario;
    #cpf;
    #bonificacao;
    #senha;

    get nome() {
        return this.#nome;
    }

    get salario() {
        return this.#salario;
    }

    get cpf() {
        return this.#cpf;
    }

    get bonificacao() {
        return this.#bonificacao;
    }

    get senha() {
        return this.#senha;
    }

    autenticar(senha) {
        return senha == this.#senha;
    }

    constructor(nome, salario, cpf) {
        this.#nome = nome;
        this.#salario = salario;
        this.#cpf = cpf;
        this.#bonificacao = 1;
        this.#senha;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }
}