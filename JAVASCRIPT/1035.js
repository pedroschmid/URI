var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

numeros = lines[0].split(' ')

A = Number(numeros[0]);
B = Number(numeros[1]);
C = Number(numeros[2]);
D = Number(numeros[3]);

if ((B > C) && (D > A) && ((C + D) > (A + B)) && C >= 0 && D >= 0 && A % 2 === 0) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}