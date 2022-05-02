export class SistemaDeAutenticacao {
    static login(autenticavel, senha) { //verfica se a senha recebidda como argumento do método autenticar() do objeto Funcionario ou cliente é igual a senha cadastrada  e retorna true ou false
       
       if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)) {
        return autenticavel.autenticar(senha);
       }
       return false;
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function; // a palvra-chave in verifica se a chave existe dentro do objeto e instanceof se autrnticavel é uma instância de uma função
    }
}