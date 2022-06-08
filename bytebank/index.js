import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js"
import { ContaPoupanca } from "./conta/ContaPoupanca.js"
import { ContaSalario } from "./conta/ContaSalario.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309, '456');
const cliente2 = new Cliente("Alice", 88822233309, '789');
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente1, '456');

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const conta2 = new ContaCorrente(0, cliente2, 102);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

let valor = 200;
contaCorrenteRicardo.depositar(valor);
contaCorrenteRicardo.sacar(10);
contaCorrenteRicardo.tranferir(valor, conta2);

const gerente = new Gerente("Ricardo", 5000, 12345678901);
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
gerente.cadastrarSenha('123');
diretor.cadastrarSenha('123456');
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, '123456');

console.log(contaCorrenteRicardo); // objeto vazio porque todas as propriedades do objeto são atributos privados
console.log(contaCorrenteRicardo.saldo); //acessando os atributos privados 
console.log(contaCorrenteRicardo.cliente); //acessando os atributos privados
console.log(contaCorrenteRicardo.agencia); //acessando os atributos privados
console.log(conta2); // objeto vazio porque todas as propriedades do objeto são atributos privados
console.log(cliente1); // propriedade cpf não visível pois é um atributo privado
console.log(cliente2); // propriedade cpf não visível pois é um atributo privado
console.log(cliente1.cpf); //acessando os atributos privados
console.log(cliente2.cpf); //acessando os atributos privados
console.log(contaPoupanca.saldo); //acessando os atributos privados
console.log(contaPoupanca.cliente); //acessando os atributos privados
console.log(contaPoupanca.agencia); //acessando os atributos privados
console.log(ContaCorrente.numeroDeContas); // acessando a propriedade apenas da classe ContaCorrente
console.log(contaSalario); // objeto vazio porque todas as propriedades do objeto são atributos privados
console.log(gerente); //objeto vazio porque todas as propriedades do objeto são atributos privados
console.log(diretor); //objeto vazio porque todas as propriedades do objeto são atributos privados
console.log(gerenteEstaLogado); // testando o login do gerente
console.log(diretorEstaLogado); //testando o login do diretor
console.log(clienteEstaLogado); // testando o login do cliente
