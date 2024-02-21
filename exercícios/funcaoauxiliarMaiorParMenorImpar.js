// entrada: 5 3 4 1 10 8; saida: maior numero par 10 menor numero impar 1
const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };