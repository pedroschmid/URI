var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines[0])
result = (distance * 60) / 30
console.log(parseInt(result) + " minutos");