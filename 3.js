/*
Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.
*/


const prompt =  require('prompt-sync')();

let salario = Number(prompt("Digite o seu salario: "))
let aumento = Number(prompt("Digite o percentual de aumento em porcentagem ex 10 que equivale a 10%: "))

if (isNaN(salario) || isNaN(aumento) || salario < 0 || aumento <= 0){
    console.log("Valor Invalido")
    process.exit()
}

let novoSalario = salario +  (salario * (aumento / 100))

if (salario < 1500){
    console.log(`O seu salário foi dobrado, você recebe 3 mil reais`)
}

else{
    console.log(`No seu  salario de  ${salario}  reais, você recebeu o aumento de ${aumento}%. O seu novo salario é ${novoSalario}`)
}
