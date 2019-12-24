var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines[0].split(' ')

var result;

var a = parseInt(valores[0])
var b = parseInt(valores[1])
result = parseFloat(0);

if (a == 1) {
    result = b * 4.00;
    console.log("Total: R$ " + result.toFixed(2));
} else if (a == 2) {
    result = b * 4.50;
    console.log("Total: R$ " + result.toFixed(2));
} else if (a == 3) {
    result = b * 5.00;
    console.log("Total: R$ " + result.toFixed(2));
} else if (a == 4) {
    result = b * 2.00;
    console.log("Total: R$ " + result.toFixed(2));
} else if (a == 5) {
    result = b * 1.50;
    console.log("Total: R$ " + result.toFixed(2));
}