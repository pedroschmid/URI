var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0])
var i;
var b;

for (i = 1; i <= 10; i++) {
    b = i * n;
    console.log(i + " x " + n + " = " + b);
}