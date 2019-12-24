var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = (lines[0]).split(' ')
var p2 = (lines[1]).split(' ')
x1 = parseFloat(p1[0])
y1 = parseFloat(p1[1])
x2 = parseFloat(p2[0])
y2 = parseFloat(p2[1])

result = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
console.log(result.toFixed(4));