let numeros: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];
let multiplosDe3: number[] = [];
let multiplosDe5: number[] = [];
let outros: number[] = [];


for( let n of numeros){
    if(n % 3 == 0){
        multiplosDe3.push(n);
    }else if( n % 5 == 0){
        multiplosDe5.push(n)
    }else{
        outros.push(n)
    }
}

let maiorNum = function(arr: number[]): number{
    
    let maior: number = 0;

    for( let i: number = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i];
        }
    }

    return maior;
}

let ordernar = function(arr: number[]): number[]{

    let arr2: number[] = [];

    while (arr.length > 0) {
        let maior: number = maiorNum(arr);
        arr2.push(maior);
        arr.splice(arr.indexOf(maior), 1);
    }

    return arr2;
}

let calcMedia = function(arr: number[]): number{

    let soma: number = 0;

    for(let a of arr){
        soma+=a;
    }

    return soma/arr.length;

}

let calcMediana = function(arr: number[]): number{
    
    let media: number = calcMedia(arr);
    let mediana: number = arr[0];
    let dif: number = arr[0];

    for(let a of arr){
        if(dif > Math.abs(media - a)){
            mediana = a;
            dif = Math.abs(media - a)
        }
    }
    return mediana;
}

let menorNum = function(arr: number[]):number{
    let menor: number = arr[0];

    for( let i: number = 0; i < arr.length; i++){
        if(arr[i] < menor){
            menor = arr[i];
        }
    }

    return menor;
}

let somaNum = function(arr: number[]):number{
    let soma: number = 0;

    for( let i: number = 0; i < arr.length; i++){
        soma += arr[i];
    }

    return soma;
}

multiplosDe3 = ordernar(multiplosDe3);
multiplosDe5 = ordernar(multiplosDe5);
outros = ordernar(outros);

let media3: number = calcMedia(multiplosDe3);
let media5: number = calcMedia(multiplosDe5);
let mediaOutros: number = calcMedia(outros);

let mediana3: number = calcMediana(multiplosDe3);
let mediana5: number = calcMediana(multiplosDe5);
let medianaOutros: number = calcMediana(outros);

let maior3: number = maiorNum(multiplosDe3);
let maior5: number = maiorNum(multiplosDe5);
let maiorOutros: number = maiorNum(outros);

let menor3: number = menorNum(multiplosDe3);
let menor5: number = menorNum(multiplosDe5);
let menorOutros: number = menorNum(outros);

let soma3: number = somaNum(multiplosDe3);
let soma5: number = somaNum(multiplosDe5);
let somaOutros: number = somaNum(outros);

console.log(multiplosDe3, media3, mediana3, maior3, menor3, soma3);
console.log(multiplosDe5, media5, mediana5, maior5, menor5, soma5);
console.log(outros, mediaOutros, medianaOutros, maiorOutros, menorOutros, somaOutros);