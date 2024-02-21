const {gets, print} = require("./funcaoauxiliarMaiorParMenorImpar")

let tamanho = gets()
let maiorPar = null;
let menorImpar = null;


for (let i = 0; i < tamanho; i++) {
    let numero = gets();
    if(numero % 2 === 0){
        if(numero > maiorPar || maiorPar === null){
            maiorPar = numero
        }
    }else {
        if(menorImpar === null || numero < menorImpar){
            menorImpar = numero
        }
    }
}
print(`O maior número par é ${maiorPar} e o menor ímpar é ${menorImpar}`)