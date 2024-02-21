/*salario transferido = salario bruto - imposto do salario + beneficiosentrada: 2000sal e 250ben*/
const {gets , print} = require("./funcaoauxiliarSalario")

let salarioBruto = gets()
let beneficios = gets()

function calcularPorcentagem(salario){
    if (salario <= 1100){
        return 5
    } else if (salario > 1100 && salario < 2500){
        return 10
    } else {
        return 15
    }
}

function calcularImposto(salario , porcentagem){
    let imposto =  salario * porcentagem/100
    return imposto
    }
    
let porcentagemImposto = calcularPorcentagem(salarioBruto)
let calculoSalarioSemBeneficio = calcularImposto(salarioBruto , porcentagemImposto)

let salarioFinal = salarioBruto - calculoSalarioSemBeneficio + beneficios
print(salarioFinal)