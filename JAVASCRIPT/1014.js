var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0].split(' ')
var line2 = lines[1].split(' ')
km = parseInt(line1[0])
litros = parseFloat(line2[0])
result = km / litros;
console.log(result.toFixed(3) + " km/l");