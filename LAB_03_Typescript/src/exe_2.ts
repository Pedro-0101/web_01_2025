let produtos: string[] = ["Arroz", "Feijão", "Leite", "Pão"];

produtos[produtos.indexOf("Leite")] = "Queijo";
produtos.shift();
produtos.push("Café");

console.log(produtos, produtos.length)
