function calcularMedia (notas: number[]): number{

    
    try{
        
        if(notas.length === 0){
            throw new Error("Não existem notas no vetor");
        }
        
        let soma = 0;
        
        // No codigo original, o for estava com a condição i<= notas.length, 
        // o que causava um erro de execução, 
        // pois o vetor não existe no índice igual ao tamanho do vetor.
        // O correto é i < notas.length, pois o índice começa em 0 e vai até o tamanho - 1.
        for ( let i = 0; i < notas.length ; i++) { 
            soma+= notas[i];
        }

        return soma/notas.length;
    }

    catch(erro){
        console.log("Erro ao calcular a média: " + erro);
        return 0;
    }

}

console.log(calcularMedia([]));