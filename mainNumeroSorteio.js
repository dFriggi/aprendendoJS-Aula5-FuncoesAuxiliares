const {gets , print} = require("./funcoesauxiliares")

let maiorNumero = 0

for(let i = 0; i < 5 ; i++){
    numeroSorteio = gets()
    if(numeroSorteio > maiorNumero){
        maiorNumero = numeroSorteio
    }
}

print(maiorNumero)