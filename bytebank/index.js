import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente(); //instanciando um objeto a partir de uma classe
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente(); //instanciando um objeto a partir de uma classe
cliente2.nome = "Alice";
cliente2.cpf = 44455566602;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0; //depósito inicial
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100); //2º depósito
const valorSacado = contaCorrenteRicardo.sacar(50); //saque

console.log(cliente1);
console.log(cliente2);
console.log(valorSacado);
