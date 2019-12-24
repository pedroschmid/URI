var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var N, valor
n100 = 0
n50 = 0
n20 = 0
n10 = 0
n5 = 0
n2 = 0
n1 = 1;
valor = N;

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

console.log(valor)
console.log(Math.trunc(n100) + ' nota(s) de R$ 100,00')
console.log(Math.trunc(n50) + ' nota(s) de R$ 50,00')
console.log(Math.trunc(n20) + ' nota(s) de R$ 20,00')
console.log(Math.trunc(n10) + ' nota(s) de R$ 10,00')
console.log(Math.trunc(n5) + ' nota(s) de R$ 5,00')
console.log(Math.trunc(n2) + ' nota(s) de R$ 2,00')
console.log(Math.trunc(n1) + ' nota(s) de R$ 1,00')