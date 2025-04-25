function cadastrarUsuario(nome: string, idade: number): void {
    try {
        if (nome.length === 0 || idade <= 0) {
            throw new Error("Dados inválidos");
        }
        console.log("Usuário cadastrado!");
    } catch (erro) {
        console.log("Erro ao cadastrar o usuário: " + erro);
    }
}

cadastrarUsuario("", 0); // Dados inválidos
cadastrarUsuario("João", 25); // Usuário cadastrado!