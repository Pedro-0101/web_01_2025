let produtos: string[] = ["Arroz", "Feijão", "Leite", "Pão", "Açúcar", "Café", "Óleo"];

let subItem = function(prod1: string, prod2: string, arr: string[]):string[]{
    
    for(let a of arr){
        if(a === prod1){
            a = prod2;
        }
    }
    
    return arr;
}

let contItem = function(arr: string[]): number{
    let i: number = 0;

    for(let a of arr){
        i++;
    }

    return i;
}

let addItem = function(arr: string[], item: string):string[]{

    let tamanho:number = arr.length;

    arr[tamanho] = item;

    return arr;

}

let removePrimeiro = function(arr: string[]):string[]{

    let arr2: string[] = [];

    for(let a of arr){
        if(arr.indexOf(a) !== 0){
            arr2 = addItem(arr2, a);
        }
    }

    return arr2;

}

let inverte = function(arr: string[]):string[]{

    let arr2: string[] = [];
    let tamanho: number = arr.length;

    for(let i: number = tamanho -1 ; i >= 0; i--){
        arr2 = addItem(arr2, arr[i]);
    }

    return arr2;

}

produtos = subItem("Leite", "Queijo", produtos);
produtos = removePrimeiro(produtos);
produtos = addItem(produtos, "Farinha")
produtos = inverte(produtos);
let tamanho: number = contItem(produtos);

console.log(produtos, tamanho);