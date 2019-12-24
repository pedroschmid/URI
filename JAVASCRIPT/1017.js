var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var t = parseInt(lines[0]);
var v = parseFloat(lines[1]);
var result = (t * v) / 12.0;
console.log(result.toFixed(3));