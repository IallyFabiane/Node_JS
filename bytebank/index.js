import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309); //instanciando um objeto a partir de uma classe
const cliente2 = new Cliente("Alice", 44455566602); //instanciando um objeto a partir de uma classe

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500); //2º depósito
const valorSacado = contaCorrenteRicardo.sacar(50); //saque

const conta2 = new ContaCorrente(102, cliente2);
contaCorrenteRicardo.transferir(200, conta2);

console.log(cliente1);
console.log(cliente2);
console.log(valorSacado);
console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(conta2.cliente);
console.log(contaCorrenteRicardo.saldo);
console.log(conta2.saldo);
console.log(cliente1.cpf, cliente2.cpf);
console.log(ContaCorrente.numeroDeContas);
