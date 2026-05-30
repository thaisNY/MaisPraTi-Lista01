/*
Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
*/

const prompt = require('prompt-sync')();

while(true){
    console.log("Bem-vindo ao sistema da Pizzaria\n")
    
    let tamanhoInput = prompt("Digite o tamanho da pizza (P, M, G) ou S para sair: ")
    let tamanho = tamanhoInput.toUpperCase()

    if (tamanho === "S"){
        console.log("Encerrando o sistema da pizzaria. Até mais!")
        break
    }

    
    if (!"PMG".includes(tamanho) || tamanho.length !== 1){
        console.log("Tamanho inválido! Escolha P, M ou G.\n")
        continue
    }

    let bordaInput = prompt("Digite o tipo de borda (T para Tradicional / R para Recheada): ")
    let borda = bordaInput.toUpperCase()

   
    if (!"TR".includes(borda) || borda.length !== 1){
        console.log("Tipo de borda inválido! Escolha T ou R.\n")
        continue
    }

    let precoBase = 0

    
    switch(tamanho){
        case "P":
            precoBase = 25.00
            break
        case "M":
            precoBase = 35.00
            break
        case "G":
            precoBase = 45.00
            break
    }

    
    let precoFinal = precoBase
    if (borda === "R") {
        precoFinal += 8.00
    }

    
    console.log("\n RESUMO DO PEDIDO ")
    console.log(`Tamanho: ${tamanho}`)
    console.log(`Borda: ${borda === "R" ? "Recheada (+R$ 8,00)" : "Tradicional"}`)
    console.log(`Valor Total: R$ ${precoFinal.toFixed(2)}`)
    
}