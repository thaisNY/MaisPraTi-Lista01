/*
Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
ou Reprovado (nota menor que 5).
*/

const prompt =  require('prompt-sync')();


let nota = prompt("Digite a sua nota um valor entre 0 a 10: ")

nota = Number(Number(nota).toFixed(1))

if (isNaN(nota) || nota < 0 || nota > 10 ){
    console.log("Valor invalido")
}

else if (nota >= 7){
    console.log("Aprovado")
}

else if ( nota >= 5 &&  nota<= 6.9){
    console.log("Recuperação")
}

else{
    console.log("Reprovado")
}