/*
Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.
*/

const prompt = require('prompt-sync')();

let valorCompra = Number(prompt("Digite o valor total da compra: "));

if (isNaN(valorCompra) || valorCompra < 0) {
    console.log("Valor Invalido");
    process.exit();
}

let percentualDesconto = 0;

if (valorCompra >= 100 && valorCompra <= 299.99) {
    percentualDesconto = 10;
} else if (valorCompra >= 300 && valorCompra <= 499.99) {
    percentualDesconto = 15;
} else if (valorCompra >= 500) {
    percentualDesconto = 20;
}

let desconto = valorCompra * (percentualDesconto / 100);
let valorFinal = valorCompra - desconto;

if (percentualDesconto === 0) {
    console.log(`Compras abaixo de R$ 100,00 não têm desconto. Você pagará o valor original de R$ ${valorCompra.toFixed(2)}`);
} else {
    console.log(`No seu valor original de R$ ${valorCompra.toFixed(2)}, você recebeu um desconto de ${percentualDesconto}% (R$ ${desconto.toFixed(2)}). O seu valor final a pagar é R$ ${valorFinal.toFixed(2)}`);
}