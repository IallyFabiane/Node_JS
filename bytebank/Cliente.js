export class Cliente { //construindo uma classe 
 
    #cpf; 
    #senha;

    get cpf() {
        return this.#cpf;
    }
    
    get senha() {
        return this.#senha;
    }

    constructor(nome, cpf, senha) { //com o constructor é possível passar os valores de nome e cpf do cliente a ser criado, porém não é possível modificar o atributo privado
        this.nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }
}
