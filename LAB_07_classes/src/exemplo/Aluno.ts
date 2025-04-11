export class Aluno{
    nome: string
    matricula: string
    cpf: number

    constructor(nome: string, matricula: string, cpf:number){
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
    }

    imprimeAluno(){
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}, CPF: ${this.cpf}`);
    }
}