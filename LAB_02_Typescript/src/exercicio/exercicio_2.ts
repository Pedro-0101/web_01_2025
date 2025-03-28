let nomes: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];

let posPedro = nomes.indexOf('Pedro');
nomes.splice(posPedro, posPedro);

nomes.push("João");
nomes.unshift("Beatriz")

console.log(nomes, nomes.length);