/*
Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).
*/


const prompt =  require('prompt-sync')();


const anoAtual = new Date().getFullYear();

let anoNacimento = prompt("Digite o ano de nascimento: ")
anoNascimento = Number(anoNacimento)
if (!Number.isInteger(anoNascimento) || anoNacimento > anoAtual || anoNacimento < 0 ){
    console.log("Valor invalido")
}
else{
    idade = anoAtual - anoNascimento

    if(idade <= 12){
        console.log(`A sua idade é ${idade} anos então é uma criança`)
    }
    else if(idade>= 13 && idade<= 17){
        console.log(`A sua idade é ${idade} anos então é um adolescente`)
    }
    else if (idade >= 18 && idade <= 59){
        console.log(`A sua idade é ${idade} anos então é um adulto`)
    }

    else{
        console.log(`A sua idade é ${idade} anos então é um idoso`)
    }
}
