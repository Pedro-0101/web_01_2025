let frase = "@gent34 3st@ @t3rces FIM";



let decodificar = function(frase) {

    frase = frase.replaceAll('@', 'a')
                 .replaceAll('3', 'e')
                 .replaceAll('!', 'i')
                 .replaceAll('*', 'o')
                 .replaceAll('%', 'u');

    frase = frase.split('').map(element => 
    isNaN(parseInt(element)) || parseInt(element) % 2 !== 0 ? element : ''
    ).join('');

    frase = frase.split(" ").map(element => 
        (element.length % 2 === 1) ? element.split('').reverse().join('') : element
    ).join(" ");

    frase = frase.replaceAll('  ', ' ')

    return frase;

}

if (frase.includes('FIM')) {
    frase = frase.slice(0, frase.indexOf('FIM'));
}

console.log(decodificar(frase));