let idades: number[] = [10, 15, 20, 8, 17, 25];

for (let idade of idades) {
    if(idade < 12){
        console.log(`Idade: ${idade} - Criança`);
    } else if( idade >= 12 && idade < 18){
        console.log(`Idade: ${idade} - Adolescente`);
    } else {
        console.log(`Idade: ${idade} - Adulto`);
    }
}