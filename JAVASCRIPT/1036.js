var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

numeros = (lines[0]).split(' ')

A = parseFloat(numeros[0]);
B = parseFloat(numeros[1]);
C = parseFloat(numeros[2]);

delta = (Math.pow(B, 2)) - 4 * A * C;
if (delta < 0 || (2 * A) === 0) {
    console.log("Impossivel calcular")
} else {
    x1 = (-B + Math.sqrt(delta)) / (2 * A);
    x2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log("R1 = " + x1.toFixed(5))
    console.log("R2 = " + x2.toFixed(5))
}