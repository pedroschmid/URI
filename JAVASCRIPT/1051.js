var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines[0])

if (salario >= 0.00 && salario <= 2000.00) {
    console.log("Isento")
} else if (salario <= 3000.00) {
    x = (salario - 2000.0) * 0.08;
    console.log("R$ " + x.toFixed(2));
} else if (salario <= 4500.00) {
    x = (salario - 3000.0) * 0.18 + (1000 * 0.08);
    console.log("R$ " + x.toFixed(2))
} else {
    x = (salario - 4500) * 0.28 + (1500 * 0.18) + (1000 * 0.08)
    console.log("R$ " + x.toFixed(2));
}