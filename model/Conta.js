export default class Conta {
    id;
    agencia;
    numeroConta;
    saldo;
    limite;
    cliente;
    tipoConta;


    constructor(props) {
            this.id = props.id;
            this.agencia = props.agencia;
            this.numeroConta = props.numeroConta;
            this.saldo = props.saldo;
            this.limite = props.limite;
            this.cliente = props.cliente;
            this.tipoConta = props.tipoConta;
    }
 
 
    depositar(valorDeposito) {
        console.log('Depositando:', valorDeposito)
        this.saldo += valorDeposito;
    }
 
    sacar(valorSaque) {
        let saldoTotal = this.saldo + this.limite;

        if (valorSaque <= saldoTotal) {
            console.log('Sacando:', valorSaque)
            this.saldo -= valorSaque;
            return true;
        } else {
            console.log('Saldo insuficiente!');
            return false;
        }
    }
 
    transferir(valorTransferencia, contaDestino) {
 
        let sacou = this.sacar(valorTransferencia);

        if (sacou) {
        contaDestino.depositar(valorTransferencia);
        } else {
            conlsole.log('A transferência não pode ser concluída!');
        }
    }
 
    gerarExtrato() {
        console.log('---------------');
        console.log('Numero da Conta:', this.numeroConta);
        console.log('Cliente: ', this.cliente.nome);
        console.log('Telefone do Cliente: ', this.cliente.telefone);
        console.log('Saldo do Cliente: ', this.saldo);
        console.log('Limite do Cliente: ', this.limite);
        console.log('Saldo total do Cliente: ', this.saldo + this.limite);
        console.log('----------------');
        console.log('');
    }
 
}
 