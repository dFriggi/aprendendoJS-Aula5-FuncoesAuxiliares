//entrada: 5.5; saída: recuperação
const {gets, print} = require("./funcaoauxiliarMediaAluno")

if(gets() < 5){
    print(`Foi reprovado com a nota ${gets()}`)
} else if(gets() >= 5 && gets() < 7){
    print(`Ficou de recuperação com a nota ${gets()}`)
}else{
    print(`Foi aprovado com a nota ${gets()}`)
}