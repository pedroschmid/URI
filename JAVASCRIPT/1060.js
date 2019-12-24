var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0, 1, 2, 3, 4, 5]);

a = parseFloat(lines[0]);
b = parseFloat(lines[1]);
c = parseFloat(lines[2]);
d = parseFloat(lines[3]);
e = parseFloat(lines[4]);
f = parseFloat(lines[5]);

cont = 0;

if (a > 0) {
    cont = cont + 1
}
if (b > 0) {
    cont = cont + 1
}
if (c > 0) {
    cont = cont + 1
}
if (d > 0) {
    cont = cont + 1
}
if (e > 0) {
    cont = cont + 1
}
if (f > 0) {
    cont = cont + 1
}

console.log(cont + " valores positivos")