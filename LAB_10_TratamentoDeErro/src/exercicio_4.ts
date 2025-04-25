class Pessoa {
    constructor(
        public nome: string,
        public email: string,
        public dataNascimento: string
    ) {}

    validarNome(nome: string): void {
        
        try{
            if(nome.length === 0) {
                throw new Error("Nome vazio");
            }
            if(nome !== nome.trim()){
                throw new Error("Nome inválido, não pode conter espaços no início ou no fim");
            }
            if(nome !== nome.toUpperCase()){
                throw new Error("Nome inválido, deve ser escrito com todas as letras maiúsculas");
            }

            console.log("Nome válido: " + nome);
        }catch(erro: unknown){
            if(erro instanceof Error) {
                console.log("Erro ao validar o nome: " + erro.message);
            }else if (typeof erro === "string") {
                console.log("Erro ao validar o nome: " + erro);
            }else{
                console.log("Erro desconhecido ao validar o nome: " + erro);
            }
        }
    }

    validarEmail(email: string): void {
        
        try {

            if(email.length === 0) {
                throw new Error("Email vazio");
            }
            if(!email.includes("@")) {
                throw new Error("Email inválido, deve conter o caractere @");
            }
            if(!email.includes(".com")) {
                throw new Error("Email inválido, deve conter os caracteres .com");
            }

            console.log("Email válido: " + email);
        }
        catch (erro: unknown) {
            if(erro instanceof Error) {
                console.log("Erro ao validar o email: " + erro.message);
            }else if (typeof erro === "string") {
                console.log("Erro ao validar o email: " + erro);
            }else{
                console.log("Erro desconhecido ao validar o email: " + erro);
            }
            
        }

    }

    validarDataNascimento(dataNascimento: string): void {
        
        try {
            
            let data: string[] = dataNascimento.split("/");

            if(data[0].length !== 2 || data[1].length !== 2 || data[2].length !== 4) {
                throw new Error("Data inválida, deve estar no formato dd/mm/aaaa");
            }
            if(data[0] < "01" || data[0] > "31") {
                throw new Error("Dia inválido, deve estar entre 01 e 31");
            }
            if(data[1] < "01" || data[1] > "12") {
                throw new Error("Mês inválido, deve estar entre 01 e 12");
            }if(data[2] < "1925" || data[2] > "2025") {
                throw new Error("Ano inválido, deve estar entre 1925 e 2025");
            }

            console.log("Data de nascimento válida: " + dataNascimento);

        }catch(erro: unknown) {
            if(erro instanceof Error) {
                console.log("Erro ao validar a data de nascimento: " + erro.message);
            }else if (typeof erro === "string") {
                console.log("Erro ao validar a data de nascimento: " + erro);
            }else{
                console.log("Erro desconhecido ao validar a data de nascimento: " + erro);
            }
        }

    }
}

const pessoa = new Pessoa("", "", "50/01/1905");
pessoa.validarDataNascimento(pessoa.dataNascimento);