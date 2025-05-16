export class Jogador {
    "id": number;
    "nome": string;
    "cpf": string;
    "email": string;
    "telefone": string;
    "posicao": string;

    constructor(nome: string, cpf: string, email: string, telefone: string, posicao: string) {
        this.id = this.gerarId();
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.posicao = posicao;
    }

    private gerarId(): number {
        return Date.now();
    }
}