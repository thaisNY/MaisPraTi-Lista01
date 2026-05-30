/*
Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque.
*/

const prompt = require('prompt-sync')();

while(true){
    console.log("Bem-vindo ao Caixa Eletrônico\n")
    
    let saqueInput = prompt("Digite o valor que deseja sacar ou S para sair: ")
    let opcao = saqueInput.toUpperCase()

    if (opcao === "S"){
        console.log("Encerrando o sistema. Até mais!")
        break
    }

    let valor = Number(saqueInput)

    if (isNaN(valor) || valor <= 0 || valor % 10 !== 0){
        console.log("Valor inválido! O valor deve ser maior que zero e múltiplo de 10.\n")
        continue
    }

    let notas100 = 0
    let notas50 = 0
    let notas20 = 0
    let notas10 = 0

    console.log(`Valor do saque: R$ ${valor}`)

    switch(true){
        case (valor >= 100):
            notas100 = Math.floor(valor / 100)
            valor %= 100
            if (notas100 > 0) console.log(`Notas de R$ 100: ${notas100}`)
            
        case (valor >= 50):
            notas50 = Math.floor(valor / 50)
            valor %= 50
            if (notas50 > 0) console.log(`Notas de R$ 50: ${notas50}`)
            
        case (valor >= 20):
            notas20 = Math.floor(valor / 20)
            valor %= 20
            if (notas20 > 0) console.log(`Notas de R$ 20: ${notas20}`)
            
        case (valor >= 10):
            notas10 = Math.floor(valor / 10)
            valor %= 10
            if (notas10 > 0) console.log(`Notas de R$ 10: ${notas10}`)
            break
    }
}