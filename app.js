import Cliente from './model/Cliente.js';
import Conta from './model/Conta.js';
 
//Criar um objeto CLiente
let cliente1 = new Cliente(1300, 'Luis Inacio Lula da Silva', '(11)951628604', 'Testando123@gmail.com', 2000);
let cliente2 = new Cliente(2200, 'Flavio Bolsonaro Jr.', '(11)4002-8922', 'Ronaldinho@gmail.com', 8000);

 
//Exibir os dados do cliente no console
console.log('Nome do Cliente:', cliente1.nome);
console.log('Telefone do Cliente: ', cliente1.telefone);
console.log('Salário do Cliente: ', cliente1.salario);
console.log('E-mail do Cliente: ', cliente1.email);



console.log('Nome do Cliente:', cliente2.nome);
console.log('Telefone do Cliente: ', cliente2.telefone);
console.log('Salário do Cliente: ', cliente2.salario);
console.log('E-mail do Cliente: ', cliente2.email);
 
//Criar uma conta para o cliente1
 
let conta1 = new Conta({ id: 1300, agencia: '0001', numeroConta: '40.001-01', cliente: cliente1, limite: 2000, saldo: 1000, tipoConta: 'Corrente' });



let conta2 = new Conta({ id: 2200, agencia: '0004', numeroConta: '40.002-02', cliente: cliente2, limite: 3000, saldo: 4000, tipoConta: 'Corrente' });

 
//Exibir os dados do cliente no console
conta1.gerarExtrato();
 
 
//Depositar 1000 reais na conta1
conta1.depositar(2000);

//Exibir os dados do cliente no console
conta1.gerarExtrato();

//Sacando 2000 reais na conta1
conta1.sacar(1400);


// Conta 2

conta2.depositar(2000);
conta2.gerarExtrato();
conta2.sacar(700);
       
 
// transferir 1400 da conta 1 para a conta 2 

conta1.transferir(1900, conta2);
