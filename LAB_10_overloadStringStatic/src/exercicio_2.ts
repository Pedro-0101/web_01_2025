class Exercicios2 {
    
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
}

const data = new Date();

console.log(Exercicios2.formatar(true));
console.log(Exercicios2.formatar(data));
console.log(Exercicios2.formatar(5));
console.log(Exercicios2.formatar(false));