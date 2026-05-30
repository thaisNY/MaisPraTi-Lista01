/*
Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max().
*/
 
const prompt =  require('prompt-sync')();

let num1 = Number(prompt("Digite um numero inteiro: "))
let num2 = Number(prompt("Digite mais um numero inteiro: "))
let num3 = Number(prompt("Digite mais um numero inteiro: "))

maior = 0

if (!Number.isInteger(num1) || !Number.isInteger(num2) || !Number.isInteger(num3)){
    console.log("Entrada Invalida")
    process.exit()
}

if (num1 > num2 && num1> num3){
    maior = num1
    console.log(`O maior numero é ${maior}`)
}
else if(num2 > num1 && num2>num3){
    maior = num2
    console.log(`O maior numero é ${maior}`)
}
else{
    maior = num3
    console.log(`O maior numero é ${maior}`)
}