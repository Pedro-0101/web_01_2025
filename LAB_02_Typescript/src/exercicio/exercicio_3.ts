let listaMista: (string | number)[] = [1, "Maça", 2, "Banana", 3, "Laranja"];
let numbers: number[] = [];
let frutas: string[] = [];

for(let item of listaMista){
    if(typeof(item) === "number"){
        numbers.push(item);
    } else{
        frutas.push(item);
    }
}

console.log(numbers); 
console.log(frutas); 
