class Exercicios3 {
    
    static formatar(a: number):number;
    static formatar(a: Date):Date;
    static formatar(a: boolean):boolean;

    static formatar(a: any):any{

        if(typeof a === 'number'){
            a = parseFloat(a.toFixed(2));
            a = a.toString();

            if(a.indexOf(".") == -1){
                a = a.padEnd(a.length + 1, ".");
                a = a.padEnd(a.length + 2, "0");
            }else{
                a = a.padEnd(a.length + 1, "0");
            }

            return a;
        }

        if(typeof a === typeof new Date()){
            
        const ano = a.getFullYear().toString();
        const mes = (a.getMonth()+1).toString().padStart(2, '0');
        const dia = a.getDate().toString().padStart(2, '0');
        
        let retorno = "dd/mm/aaaa"

        retorno = retorno.replaceAll('dd', dia);
        retorno = retorno.replaceAll('mm', mes);
        retorno = retorno.replaceAll('aaaa', ano);

        return retorno;

        }

        if(typeof a === 'boolean'){
            if(a == true){
                return "sim";
            }else{
                return "nao";
            }
        }
    }

    static contarOcorrencias(frase: string, termo:string):number{

        let contador = 0;
        let i = 0;

        while(frase.indexOf(termo, i) != -1){
            
            contador ++;

            let a = frase.indexOf(termo, i)
            i = a + termo.length;

        }


        return contador;

    }

    static primeiraLetra(frase: string):any{

        let result: string = "";

        let palavras = frase.split(" ");

        for(let p of palavras){

            result = result + " " + p.slice(0, 1);

        }

        return result;
    }

}


console.log(Exercicios3.primeiraLetra('banana nanana nana na'));