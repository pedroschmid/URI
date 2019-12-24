var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x;
x = parseFloat(lines[0]);

if (x >= 0 && x <= 25.0000) {
    console.log("Intervalo [0,25]");
} else if (x > 25.0000 && x <= 50.0000) {
    console.log("Intervalo (25,50]")
} else if (x > 50.000 && x <= 75.0000) {
    console.log("Intervalo (50,75]");
} else if (x > 75.000 && x <= 100.0000) {
    console.log("Intervalo (75,100]");
} else {
    console.log("Fora de intervalo")
}