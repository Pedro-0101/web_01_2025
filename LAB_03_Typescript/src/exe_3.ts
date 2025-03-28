let dados: (string | number)[] = [10, "Azul", 25, "Vermelho", 30, "Verde"];
let strings: string[] = [];
let numbers: number[] = [];


for( let d of dados){
    if(typeof(d) === "string"){
        strings.push(d);
    }else{
        numbers.push(d);
    }
}

console.log(strings)
console.log(numbers)