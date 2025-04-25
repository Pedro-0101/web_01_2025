function executarOperacao() {
    try {
        throw "Erro genérico";
    } catch (erro: unknown) {
        if(erro instanceof Error) {
            console.log("Erro:", erro.message);
        }
        else if (typeof erro === "string") {
            console.log("Erro:", erro);
        }
    }
}

executarOperacao(); 