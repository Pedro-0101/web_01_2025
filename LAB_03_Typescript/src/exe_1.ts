let numeros: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];

let par: number[] = [];
let impar: number[] = [];

for(let num of numeros){
    if(num % 2 == 1){
        impar.push(num)
        impar.sort()
    }else{
        par.push(num)
        par.sort()
    }
}

let somaPar: number = 0;
let medPar: number = 0;
let maiorPar: number = par[par.length-1];
let menorPar: number = par[0];

for( let p = 0; p < par.length; p++){
    somaPar += par[p];
}

medPar = somaPar/par.length;

let somaImpar: number = 0;
let medImpar: number = 0;
let maiorImpar: number = impar[impar.length-1];
let menorImpar: number = impar[0];

for( let i of impar){
    somaImpar += i;
}

medImpar = somaImpar / impar.length;


console.log("Pares: ")
console.log(par)
console.log(somaPar)
console.log(medPar)
console.log(maiorPar)
console.log(menorPar)

console.log("Impar")
console.log(impar)
console.log(somaImpar)
console.log(medImpar)
console.log(maiorImpar)
console.log(menorImpar)