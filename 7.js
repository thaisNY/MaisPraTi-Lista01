/*
Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.*/

const prompt =  require('prompt-sync')();


while(true){
    console.log("Bem vindo ao programa calculadora\n")
    let num1 = Number(prompt("Digite um valor: "))
    let num2 = Number(prompt("Digite outro valor: "))

    let op = prompt("Digite + para operação de soma\n Digite - para operação de subtração\n Digite * para operação de multiplicação\n Digite / para operação de divisão\n  Digite S para sair do sistema:  ")
    let oper = op.toUpperCase()

    if (isNaN(num1) || isNaN(num2)){
        console.log("Valor invalido\n")
        console.log("Obrigado por usar a calculadora proxima vez digite um numero e/ou operação válida\n")
        continue
    }

    if (oper === "S"){
        console.log("Encerrando o programa")
        break
    }

    if (!"+-*/".includes(oper)){
        console.log("Operação inválida\n")
        continue
    }

    switch(oper){
            case "+" :
                console.log(`${num1} + ${num2} = ${num1 + num2}`)
                break
            case "-" :
                console.log(`${num1} - ${num2} = ${num1 - num2}`)
                break
            case "*" :
                console.log(`${num1} * ${num2} = ${num1 * num2}`)
                break
            case "/" :
                if(num2 == 0){
                    console.log("Nao pode dividir por zero")
                } else {
                    console.log(`${num1} / ${num2} = ${num1 / num2}`)
                }
                break
            
            }
    }





