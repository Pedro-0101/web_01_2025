class Exercicios {
    static compararStrings(a: string, b:string):boolean{
        
        a = a.trim().toLowerCase();
        b = b.trim().toLowerCase();

        if(a === b){
            return true;
        } else{
            return false;
        }

    }
}

console.log(Exercicios.compararStrings("Hellow", "hellow"));
console.log(Exercicios.compararStrings("CamelCase", "CAMELcase"));
console.log(Exercicios.compararStrings(" TypeScript", "typescript"));
console.log(Exercicios.compararStrings(" Diferent", "typescript"));