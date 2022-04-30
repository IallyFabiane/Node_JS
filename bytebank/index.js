import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309); //instanciando um objeto a partir de uma classe
const cliente2 = new Cliente("Alice", 44455566602); //instanciando um objeto a partir de uma classe

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500); //2º depósito
const valorSacado = contaCorrenteRicardo.sacar(50); //saque

const conta2 = new ContaCorrente(102, cliente2);
let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);
console.log(cliente1);
console.log(cliente2);
console.log(cliente1.cpf);
console.log(cliente2.cpf);
console.log(contaCorrenteRicardo.saldo);
console.log(conta2.saldo);
