/*
Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.
*/

const prompt = require('prompt-sync')();

while(true){
    console.log("Bem-vindo ao sistema do Estacionamento\n")
    
    let horasInput = prompt("Digite a quantidade de horas estacionadas ou S para sair: ")
    let opcao = horasInput.toUpperCase()

    if (opcao === "S"){
        console.log("Encerrando o sistema. Até mais!")
        break
    }

    let horas = Number(horasInput)

    if (isNaN(horas) || horas <= 0){
        console.log("Valor inválido! Por favor, digite um número maior que zero.\n")
        continue
    }

    switch(true){
        case (horas <= 1):
            console.log(`Tempo total: ${horas}h\nValor cobrado: R$ 8.00\n`)
            break
            
        case (horas <= 2):
            console.log(`Tempo total: ${horas}h\nValor cobrado: R$ 6.00\n`)
            break
            
        case (horas <= 3):
            console.log(`Tempo total: ${horas}h\nValor cobrado: R$ 4.00\n`)
            break
            
        case (horas > 3):
            let valorAdicional = (horas - 3) * 2
            let valorTotal = 4.00 + valorAdicional
            console.log(`Tempo total: ${horas}h\nValor cobrado: R$ ${valorTotal.toFixed(2)}\n`)
            break
    }
}