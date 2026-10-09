 export default class Cliente {
 
    id;
    nome;
    telefone;
    email;
    salario;


    constructor(props) {
        this.id = props.id;
        this.nome= props.nome;
        this.telefone = props.telefone;
        this.email = props.email;
        this.salario = props.salario;
    }       
}