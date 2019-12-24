var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = Number(lines[0])
var i;

for (i = 2; i < 10000; i = i + n) {
    console.log(i)
}