var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var list = lines[0].split(' ')
a = parseInt(list[0])
b = parseInt(list[1])
c = parseInt(list[2])
maior = Math.max(a, b, c);
console.log(maior + " eh o maior")