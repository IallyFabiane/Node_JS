export class Cliente { //construindo uma classe 
    nome;
    #cpf; 

    get cpf() {
        return this.#cpf;
    }

    constructor(nome, cpf) { //com o constructor é possível passar os valores de nome e cpf do cliente a ser criado, porém não é possível modificar o atributo privado
        this.nome = nome;
        this.#cpf = cpf;
    }
}
