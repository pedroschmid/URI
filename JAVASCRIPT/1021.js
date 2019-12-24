var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseFloat(lines[0]);
var N, valor
n100 = 0
n50 = 0
n20 = 0
n10 = 0
n5 = 0
n2 = 0
n1 = 1;
moeda100 = 0;
moeda50 = 0;
moeda25 = 0;
moeda10 = 0;
moeda5 = 0;
moeda1 = 0;

valor = N;

centavos = N * 100

centavos = centavos % 100;

// NOTAS

n100 = N / 100;
N %= 100;

n50 = N / 50;
N %= 50;

n20 = N / 20;
N %= 20;

n10 = N / 10;
N %= 10;

n5 = N / 5;
N %= 5;

n2 = N / 2;
N %= 2;

n1 = N;

// MOEDAS

moeda100 = N / 1.0;
N %= 1;

moeda50 = centavos / 50;
centavos %= 50;

moeda25 = centavos / 25;
centavos %= 25;

moeda10 = centavos / 10;
centavos %= 10;

moeda5 = centavos / 5;
centavos %= 5;

moeda1 = centavos;

console.log("NOTAS:");
console.log(Math.trunc(n100) + ' nota(s) de R$ 100.00')
console.log(Math.trunc(n50) + ' nota(s) de R$ 50.00')
console.log(Math.trunc(n20) + ' nota(s) de R$ 20.00')
console.log(Math.trunc(n10) + ' nota(s) de R$ 10.00')
console.log(Math.trunc(n5) + ' nota(s) de R$ 5.00')
console.log(Math.trunc(n2) + ' nota(s) de R$ 2.00')
console.log("MOEDAS:");
console.log(Math.trunc(moeda100) + ' moeda(s) de R$ 1.00')
console.log(Math.trunc(moeda50) + ' moeda(s) de R$ 0.50')
console.log(Math.trunc(moeda25) + ' moeda(s) de R$ 0.25')
console.log(Math.trunc(moeda10) + ' moeda(s) de R$ 0.10')
console.log(Math.trunc(moeda5) + ' moeda(s) de R$ 0.05')
console.log(Math.trunc(moeda1) + ' moeda(s) de R$ 0.01')