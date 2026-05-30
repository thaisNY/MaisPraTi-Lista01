/*
Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.
*/

const prompt = require('prompt-sync')();

while(true){
    console.log("Bem-vindo ao programa Calendário\n")
    
    let mesInput = prompt("Digite o número do mês (1 a 12) ou S para sair: ")
    let mesOpcao = mesInput.toUpperCase()

    if (mesOpcao === "S"){
        console.log("Encerrando o programa. Até mais!")
        break
    }

    let mesNum = Number(mesInput)

    if (isNaN(mesNum) || mesNum < 1 || mesNum > 12){
        console.log("Mês inválido! Por favor, digite um número entre 1 e 12.\n")
        continue
    }

    switch(mesNum){
        case 1:
            console.log("Mês selecionado: Janeiro\nQuantidade de dias: 31 dias")
            break
        case 2:
            let bissextoInput = prompt("O ano atual é bissexto? (S para Sim / N para Não): ")
            let bissexto = bissextoInput.toUpperCase()
            
            if (!"SN".includes(bissexto) || bissexto.length !== 1) {
                console.log("Valor inválido para ano bissexto!")
                break
            }
            
            if (bissexto === "S") {
                console.log("Mês selecionado: Fevereiro\nQuantidade de dias: 29 dias")
            } else {
                console.log("Mês selecionado: Fevereiro\nQuantidade de dias: 28 dias")
            }
            break
        case 3:
            console.log("Mês selecionado: Março\nQuantidade de dias: 31 dias")
            break
        case 4:
            console.log("Mês selecionado: Abril\nQuantidade de dias: 30 dias")
            break
        case 5:
            console.log("Mês selecionado: Maio\nQuantidade de dias: 31 dias")
            break
        case 6:
            console.log("Mês selecionado: Junho\nQuantidade de dias: 30 dias")
            break
        case 7:
            console.log("Mês selecionado: Julho\nQuantidade de dias: 31 dias")
            break
        case 8:
            console.log("Mês selecionado: Agosto\nQuantidade de dias: 31 dias")
            break
        case 9:
            console.log("Mês selecionado: Setembro\nQuantidade de dias: 30 dias")
            break
        case 10:
            console.log("Mês selecionado: Outubro\nQuantidade de dias: 31 dias")
            break
        case 11:
            console.log("Mês selecionado: Novembro\nQuantidade de dias: 30 dias")
            break
        case 12:
            console.log("Mês selecionado: Dezembro\nQuantidade de dias: 31 dias")
            break
    }
}